let placeholder = `# React Markdown Previewer
    ## This is a sub-heading...
    ### And here are some other bits:  
    Here's some code between two backticks, just in case you want to type out code within the editor - \`<div></div>\`.
    
    \`\`\`
    // this is an example of multi-line code with formatting:
    
    function exampleFunction(firstParam, secondParam) {
      if (firstParam == 'null' && secondParam == '0') {
        return answerParam;
      }
    }
    \`\`\`
    
    You can also make text **bold** simply by adding a pair of * around the text
    
    Or underscores(_) if you want to make it _italic_.
    
    Or * and _ if you want **_both!_**
    
    And feel free to go crazy ~~crossing stuff out~~ using tildes(~).
    
    There's also [links](https://www.jon-sutton.co.uk), and
    > Block Quotes if you wany to better convey larger direct quotations
    
    And if you want to get really crazy, even tables:
    
    Wild Header | Crazy Header | Another Header?
    ------------ | ------------- | -------------
    Your content can | be here, and it | can be here....
    And here. | Okay. | I think we get it.
    
    - And of course there are lists.
      - Some are bulleted.
         - With different indentation levels.
            - That look like this.
    
    
    1. And there are numbered lists too.
    1. Use just 1s if you want, the numbers get taken care of in the background!
    1. And last but not least, there's embedded images:
    
    ![React Logo w/ Text](https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg)
    `;

export { placeholder };
