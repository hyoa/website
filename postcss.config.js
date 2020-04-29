const tailwindcss = require('tailwindcss');

// const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

// const plugins = [];
// plugins.push(tailwindcss)
// plugins.push(tailwindcss('tailwind.config.js'))

// if (!IS_DEVELOPMENT) {
//     const purgecss = require('@fullhuman/postcss-purgecss');
    
//     // class TailwindExtractor {
//     //     static extract(content) {
//     //         return content.match(/[A-z0-9-:\/]+/g) || [];
//     //     }
//     // }
    
//     plugins.push(
//         purgecss({
//             content: ['src/*.html'],
//             extractors: [
//                 {
//                     extractor: TailwindExtractor,
//                     extensions: ['html']
//                 }
//             ],
//         })
//     );
// }

// module.exports = { plugins }


// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
      'index.html',
    ],
  
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })
  
  module.exports = {
    plugins: [
      tailwindcss,
      require('autoprefixer'),
      tailwindcss('tailwind.config.js'),
      ...process.env.NODE_ENV === 'production'
        ? [purgecss]
        : []
    ]
  }