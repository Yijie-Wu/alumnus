let n="http://127.0.0.1:8000";function r(t="avatar.png"){const a=Date.now().toString();return`${n}/user/avatar/${t}?t=`+a}function o(t,a="file"){const e=Date.now().toString();return`${n}/download/${a}/${t}?t=`+e}export{r as a,o as c};
