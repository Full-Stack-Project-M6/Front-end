import styled from "styled-components";
import "../../style/globalStyles.css"

export const StyledButton = styled.button`

background: transparent;
cursor: pointer;

width: 146px;
height: 48px;

border: none;
border-radius: 4px;

font-weight: 600;
font-size: 16px;


@media (max-width: 768px){
  width: 119px;
  height: 38px;

  font-size: 14 px;
}

${({className}) => {
    switch (className){
      case "grey1":
        return `
          background-color: var(--colors-grey-0);
          color: var(--colors-whiteFixed);
          :hover{
            background-color: var(--colors-grey-1);
            color: var(--colors-whiteFixed);
          }
        `;
      case "grey1Hover":
        return `
          background-color: var(--colors-grey-1);
          color: var(--colors-whiteFixed);
        `;
      case "negative":
        return `
          background-color: var(--colors-grey-6);
          color: var(--colors-grey-2);
          :hover{
            background-color: var(--colors-grey-5);
            color: var(--colors-grey-2);
          }
        `;
      case "negativeHover":
        return `
          background-color: var(--colors-grey-5);
          color: var(--colors-grey-2);
        `;
      case "disable":
        return `
          background-color: var(--colors-grey-5);
          color: var(--colors-whiteFixed);
        `;
      case "brand1":
        return `
          background-color: var(--colors-brand-1);
          color: var(--colors-whiteFixed);
          :hover{
            background-color: var(--colors-brand-2);
            color: var(--colors-whiteFixed);
          }
        `;
      case "brand1Hover":
        return `
          background-color: var(--colors-brand-2);
          color: var(--colors-whiteFixed);
        `;
      case "brandOpacity":
        return `
          background-color: var(--colors-brand-4);
          color: var(--colors-brand-1);
        `;
      case "light":
        return `
          background-color: var(--colors-grey-10);
          color: var(--colors-grey-1);
        `;
      case "outlineLight":
        return `
          background-color: transparent;
          color: var(--colors-grey-10);
          border: 1.5px solid var(--colors-grey-10);
          :hover{
            background-color: var(--colors-grey-10);
            color: var(--colors-grey-1);
          }
        `;
      case "outlineLightHover":
        return `
          background-color: var(--colors-grey-10);
          color: var(--colors-grey-1);
        `;
      case "outline1":
        return `
          background-color: transparent;
          color: var(--colors-grey-0);
          border: 1.5px solid var(--colors-grey-0)
        `;
      case "big45":  
        return `
          background-color: var(--colors-grey-1);
          color: var(--colors-grey-10);
        `;
      case "outline2":
        return `
          background-color: transparent;
          color: var(--colors-grey-0);
          border: 1.5px solid var(--colors-grey-4);
          :hover{
            background-color: var(--colors-grey-1);
            color: var(--colors-whiteFixed);
          }
        `
      case "outline2Hover":
        return `
        background-color: var(--colors-grey-1);
        color: var(--colors-whiteFixed);
        `
      case "outlineBrand1":
        return `
          background-color: transparent;
          color: var(--colors-brand-1);
          border: 1.5px solid var(--colors-brand-1);
          :hover{
            background-color: var(--colors-brand-4);
            color: var(--colors-brand-1);
            border: 1.5px solid var(--colors-brand-1)
          }
        `
      case "outlineBrand1Hover":
        return `
          background-color: var(--colors-brand-4);
          color: var(--colors-brand-1);
          border: 1.5px solid var(--colors-brand-1)
        `
      case "link":
        return `
          background-color: transparent;
          color: var(--colors-grey-0);
          :hover{
            background-color: var(--colors-grey-8);
            color: var(--colors-grey-0);
          }
        `
      case "linkHover":
        return `
          background-color: var(--colors-grey-8);
          color: var(--colors-grey-0);
        `
      case "alert":
        return `
          background-color: var(--colors-alert-3);
          color: var(--colors-alert-1);
          :hover{
            background-color: var(--colors-alert-2);
            color: var(--colors-alert-1);
          }
        `
      case "alertHover":
        return `
          background-color: var(--colors-alert-2);
          color: var(--colors-alert-1);
        `
      case "success":
        return `
          background-color: var(--colors-success-3);
          color: var(--colors-success-1);
          :hover{
            background-color: var(--colors-success-2);
            color: var(--colors-success-1); 
          }
        `
      case "successHover":
        return `
          background-color: var(--colors-success-2);
          color: var(--colors-success-1);
        `
      case "brandDisable":
        return `
          background-color: var(--colors-brand-3);
          color: var(--colors-brand-4);
        `

    }
}}
`
