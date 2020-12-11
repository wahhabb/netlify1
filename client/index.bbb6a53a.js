import{S as s,i as t,s as e,e as a,t as l,a as r,b as o,f as n,g as h,d as c,c as i,h as u,j as f,k as p,l as d,q as g,n as m,m as k}from"./client.45715156.js";import{s as v,D as b,m as y}from"./bundle.esm.23511677.js";function Y(s,t,e){const a=s.slice();return a[1]=t[e],a}function q(s){let t,e,g,m,k,v,b,Y,q,D,E=s[1].Title+"",j=y().to(s[1].Published,"DD-MM-YYYY")+"",M=s[1].author.username+"";return{c(){t=a("li"),e=a("a"),g=l(E),k=r(),v=a("p"),b=l(j),Y=l(" ago by "),q=l(M),D=r(),this.h()},l(s){t=o(s,"LI",{});var a=n(t);e=o(a,"A",{class:!0,rel:!0,href:!0});var l=n(e);g=h(l,E),l.forEach(c),a.forEach(c),k=i(s),v=o(s,"P",{class:!0});var r=n(v);b=h(r,j),Y=h(r," ago by "),q=h(r,M),D=i(r),r.forEach(c),this.h()},h(){u(e,"class","main-title svelte-1k4s1kk"),u(e,"rel","prefetch"),u(e,"href",m="articles/"+s[1].Slug),u(v,"class","svelte-1k4s1kk")},m(s,a){f(s,t,a),p(t,e),p(e,g),f(s,k,a),f(s,v,a),p(v,b),p(v,Y),p(v,q),p(v,D)},p(s,t){1&t&&E!==(E=s[1].Title+"")&&d(g,E),1&t&&m!==(m="articles/"+s[1].Slug)&&u(e,"href",m),1&t&&j!==(j=y().to(s[1].Published,"DD-MM-YYYY")+"")&&d(b,j),1&t&&M!==(M=s[1].author.username+"")&&d(q,M)},d(s){s&&c(t),s&&c(k),s&&c(v)}}}function D(s){let t,e,d,v,b,y=s[0],D=[];for(let t=0;t<y.length;t+=1)D[t]=q(Y(s,y,t));return{c(){t=r(),e=a("h1"),d=l("recent posts"),v=r(),b=a("ul");for(let s=0;s<D.length;s+=1)D[s].c();this.h()},l(s){g('[data-svelte="svelte-jhdil8"]',document.head).forEach(c),t=i(s),e=o(s,"H1",{});var a=n(e);d=h(a,"recent posts"),a.forEach(c),v=i(s),b=o(s,"UL",{class:!0});var l=n(b);for(let s=0;s<D.length;s+=1)D[s].l(l);l.forEach(c),this.h()},h(){document.title="articles",u(b,"class","svelte-1k4s1kk")},m(s,a){f(s,t,a),f(s,e,a),p(e,d),f(s,v,a),f(s,b,a);for(let s=0;s<D.length;s+=1)D[s].m(b,null)},p(s,[t]){if(1&t){let e;for(y=s[0],e=0;e<y.length;e+=1){const a=Y(s,y,e);D[e]?D[e].p(a,t):(D[e]=q(a),D[e].c(),D[e].m(b,null))}for(;e<D.length;e+=1)D[e].d(1);D.length=y.length}},i:m,o:m,d(s){s&&c(t),s&&c(e),s&&c(v),s&&c(b),k(D,s)}}}const E=v`
    query Blogs {  
            blogs {
                    id
                    Title
                    Description
                    Published
                    Body
                    author {
                        username
                    }
                    Slug
            }
    } 
    `;async function j({params:s,query:t}){const e=new b({uri:"http://localhost:1337/graphql",fetch:this.fetch});return{posts:(await e.query({query:E})).data.blogs}}function M(s,t,e){let{posts:a}=t;return s.$$set=s=>{"posts"in s&&e(0,a=s.posts)},[a]}export default class extends s{constructor(s){super(),t(this,s,M,D,e,{posts:0})}}export{j as preload};
