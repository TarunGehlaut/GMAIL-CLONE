import{G as n,o as p}from"./ToolTip-ae241d58.js";import{b as r}from"./index-ac738244.js";function f(t){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7 10l5 5 5-5z"}}]})(t)}function v(t){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"}}]})(t)}const z=t=>{const[l,e]=r.useState(null),[c,s]=r.useState(""),[i,o]=r.useState(!1);return{call:async(h,u="")=>{o(!0),e(null),s("");try{let a=await p(t,h,u);e(a.data)}catch(a){s(a.message)}finally{o(!1)}},error:c,loading:i,response:l}};export{v as M,f as a,z as u};