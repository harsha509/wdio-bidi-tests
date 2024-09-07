describe("Log Entry", ()=> {
  it("Should listen to console log events", async ()=> {

    await browser.sessionSubscribe({ events: ['browsingContext.domContentLoaded'] });

    // Event listener for DOM changes
    await browser.on('browsingContext.domContentLoaded', async (event) => {
      console.log(`DOM Content Loaded ${JSON.stringify(event)}`);

      // Inject MutationObserver script to observe DOM mutations
      await browser.execute(() => {
        const targetNode = document.body;
        const config = { attributes: true, childList: true, subtree: true };

        const callback = function(mutationsList) {
          for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
              console.log('A child node has been added or removed.');
              mutation.addedNodes.forEach(node => {
                console.log(`Added node: ${node.tagName}`);
              });
            }
            else if (mutation.type === 'attributes') {
              console.log(`The ${mutation.attributeName} attribute was modified on ${mutation.target.tagName}`);
            }
          }
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
      });
    });


    await browser.url('https://webdriver.io');

    // Simulate DOM changes (for demonstration)
    await browser.execute(() => {
      setTimeout(() => {
        const newDiv = document.createElement('div');
        newDiv.textContent = 'New dynamically added div';
        document.body.appendChild(newDiv);
      }, 3000);

      setTimeout(() => {
        document.body.setAttribute('data-status', 'updated');
      }, 5000);
    });

   await browser.pause(10000);
  })
})
