// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// // (I specified a JavaScript function in the prompt, otherwise ChatGPT responded with Python code. )

// Copy and paste the code output here.

function findFirstVowelIndex(inputString) {
    const vowels = "AEIOUaeiou"; // Define a string containing all the vowels
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (vowels.includes(char)) {
        console.log(`The first vowel in the string '${inputString}' is at index ${i}.`);
        return;
      }
    }
    console.log(`No vowel found in the string '${inputString}'.`);
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  findFirstVowelIndex(inputString);
  

// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

// This was my first time utilizing ChatGPT, so I didn't know what to expect but I had assumptions about what the output might be. I was surprised that the code output included strings stating what the first vowel would be and where its index is. I expected the code to simply log the index value. While this code rendered the correct output, it added more details than I expected. I like that it included these descriptions to specifically state what it's examining and outputting. I also like that it included an example to use with the code and see what the output looks like. I don't really see anything that I dislike about the code or how it could be employed better. It is very efficient and succinct. I would have utilized a similar approach in drafting code to loop over the characters until it detected a vowel but I would have had it simply output the index without the accompanying strings of sentences. I learned that ChatGPT is very capable of forming effective code but you must be specific in what you're asking it to do.