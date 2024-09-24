///<reference types='cypress'/>

describe('infinitescroll', function(){
    it('scenario 1', function(){
        cy.visit('https://practice.expandtesting.com/infinite-scroll');
        
        let scrollHeight = 0;
         // Function to perform scrolling and check if we have reached the bottom
        function scrollToBottom() {
         cy.window().then((win) => {
            const currentHeight = win.document.body.scrollHeight;
  
            // Scroll to the bottom of the page
            cy.scrollTo('bottom');
          
             // Wait for new content to load
            cy.wait(1000); // Adjust this time based on how long content takes to load
  
            // If the height has increased, we scroll again
            if (currentHeight > scrollHeight) {
            scrollHeight = currentHeight;
            scrollToBottom(); // Recursive call to scroll again
            }
        });
      }
  
      // Start scrolling
      scrollToBottom();
      
      // After the scrolling is done, you can assert for the final content
      // For example:
      //cy.get('selector-for-last-item').should('be.visible');
        
    })
})
