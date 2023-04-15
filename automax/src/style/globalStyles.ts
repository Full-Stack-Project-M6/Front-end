import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
/* Brand colors */

 --colors-brand-1: #4529E6;
 --colors-brand-2: #5126EA;
 --colors-brand-3: #B0A6F0;
 --colors-brand-4: #EDEAFD;

 /* Grey Scale */
 --colors-grey-opacity: #16161680;
 --colors-grey-0: #0B0D0D;
 --colors-grey-1:#212529;
 --colors-grey-2:#495057;
 --colors-grey-3:#868E96;
 --colors-grey-4:#ADB5BD;
 --colors-grey-5:#CED4DA;
 --colors-grey-6:#DEE2E6;
 --colors-grey-7:#E9ECEF;
 --colors-grey-8:#F1F3F5;
 --colors-grey-9:#F8F9FA;
 --colors-grey-10:#FDFDFD;
 --colors-whiteFixed:#FFFFFF;

 /* Feedback */

 --colors-alert-1:#CD2B31;
 --colors-alert-2:#FDD8D8;
 --colors-alert-3:#FFE5E5;
 --colors-success-1:#18794E;
 --colors-success-2:#CCEBD7;
 --colors-success-3:#DDF3E4;

 /* Colors Random Profile */

 --colors-ramdom-1:#E34D8C;
 --colors-ramdom-2:#C04277;
 --colors-ramdom-3:#7D2A4D;
 --colors-ramdom-4:#7000FF;
 --colors-ramdom-5:#6200E3;
 --colors-ramdom-6:#36007D;
 --colors-ramdom-7:#349974;
 --colors-ramdom-8:#2A7D5F;
 --colors-ramdom-9:#153D2E;
 --colors-ramdom-10:#6100FF;
 --colors-ramdom-11:#5700E3;
 --colors-ramdom-12:#30007D;

}

//reset
*{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  color: inherit;
  text-decoration: none;
}


//typography
.heading-1-700{
    font-weight: 700;   
    font-size: 44px;
}

.heading-2-600{
    font-weight: 600;
    font-size: 36px;  
}

.heading-3-600{
    font-weight: 600;
    font-size: 32px; 
}

.heading-3-500{
    font-weight: 500;
    font-size: 32px;   
}

.heading-4-600{
    font-weight: 600;
    font-size: 28px;
}

.heading-4-500{
    font-weight: 500;
    font-size: 28px;   
}

.heading-5-600{
    font-weight: 600;
    font-size: 24px;   
}

.heading-5-500{
    font-weight: 500;
    font-size: 24px;   
}

.heading-6-600{
    font-weight: 600;
    font-size: 20px;   
}

.heading-6-500{
    font-weight: 500;
    font-size: 20px;   
}

.heading-7-600{
    font-weight: 600;
    font-size: 16px;   
}

.heading-7-500{
    font-weight: 500;
    font-size: 16px;   
}

.body-1-400{
    font-weight: 400;
    font-size: 16px;
}

.body-1-600{
    font-weight: 600;
    font-size: 16px;
}

.body-2-400{
    font-weight: 400;
    font-size: 14px;
}

.body-2-500{
    font-weight: 500;
    font-size: 14px;
}

.button-big-text{
    font-weight: 600;
    font-size: 16px;
}

.button-medium-text{
    font-weight: 600;
    font-size: 14px;
}

.input-placeholder{
    font-weight: 400;
    font-size: 16px;
}

.input-label{
    font-weight: 500;
    font-size: 14px;
}
`;
