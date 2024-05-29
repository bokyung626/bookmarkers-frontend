import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,
small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,
aside,canvas,details,embed,textarea,button,figure,figcaption,footer,header,hgroup,menu,
nav,output,ruby,section,summary,time,mark,audio,video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,
nav,section {
  display: block;
}
html{
  font-size:14px;
    /* @media ${(props) => props.theme.device.mobile} {
    font-size: 10px;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: 10px;
  }
  @media ${(props) => props.theme.device.laptop} {
    font-size: 14px;
  }
  @media ${(props) => props.theme.device.desktop} {
    font-size: 14px;
  } */
}
body {
  line-height: 1;
  background: white;
  margin: 0;
  font-family: GmarketSansMedium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
input:focus {
  outline: none;
}
a {
  color: inherit;
  text-decoration: none;
}

.ck-editor__editable_inline {
    min-height: 500px;
    margin-bottom: 100px;
}

@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

`;
export default GlobalStyle;
