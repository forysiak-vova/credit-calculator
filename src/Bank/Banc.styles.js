import styled from "@emotion/styled";

export const CalculateButton = styled.button`
  background-color: rgb(11, 17, 172);
   color: white;
   cursor: pointer;
   transition: opacity .15s ease-in-out, background-color .2s ease-in-out;

    width: 200px;
   border-radius: 3px;
   border: 0px;
   margin: 10px 0;
   font-size: 16px;

    font-weight: 600;
   line-height: 40px;
   &:hover {
       background-color: rgb(24, 26, 27);
   }
`;

export const Container = styled.div`
 font-size: 18px;
 width: 100%;
 max-width: 600px;
 text-align: center;
`;

export const FormItem = styled.div`
  display: flex;
   align-items: center;
   justify-content: space-between;
   border-top: 1px solid gray;
   padding: 2px;
`;

export const FormAction = styled.div`
  text-align: center;
`;

export const FormInput = styled.div`
 position: relative;
`;

export const Input = styled.input`
 height: 32px;
  width: 200px;
   border-radius: 3px;
   border: 0px;
   margin: 10px 0;
   font-size: 16px;

`;

export const Table = styled.table`
   width: 100%;
   border-spacing: 0;
`;

export const Th = styled.th`
border-bottom: 1px solid #e6e6e6;
   padding: 5px 0;
`;

export const Td = styled.td`
border-bottom: 1px solid #e6e6e6;
   padding: 5px 0;
`;