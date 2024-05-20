/* eslint-disable */
/* import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico"; */


function domainNameGenerator() {
  let pronoun = ['the', 'our', 'your', 'his', 'her'];
  let adj = ['great', 'notsogreat', 'big', 'lonely', 'amazing'];
  let noun = ['jogger', 'diver', 'bear', 'pony', 'statue'];
  let domain = ['.com', '.net', '.fr', '.be', '.gov']
  let page = ['/myfirstadventure.html', '/alwayshungry.html', '/bruges_is_the_nicest_city_of_northern_europe.html', '/index.html']

  /* let part1 = Math.floor(Math.random() * pronoun.length);
  let part2 = Math.floor(Math.random() * adj.length);
  let part3 = Math.floor(Math.random() * noun.length);
  let part4 = Math.floor(Math.random() * domain.length);
  let part5 = Math.floor(Math.random() * page.length);

  return `https://${pronoun[part1]}${adj[part2]}${noun[part3]}${domain[part4]}${page[part5]}` */

  let fullDomainName = [];

  for (let i = 0; i<pronoun.length; i++) {
    for (let j = 0; j<adj.length; j++) {
      for (let k = 0; k<noun.length; k++) {
        for (let l = 0; l<domain.length; l++) {
          for (let m = 0; m<page.length; m++) {
            fullDomainName.push(pronoun[i] + adj[j] + noun[k] + domain[l] + page[m]);
          }
        }
      }
    }
  }

  return fullDomainName;
};

console.log(domainNameGenerator())


