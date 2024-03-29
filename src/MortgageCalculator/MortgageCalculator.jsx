import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LoanJS from "loanjs";
import {
  Container,
  Option,
  Select,
  Table,
  Th,
  Td
} from './MorgateCalculator.styles';


export default function MortgageCalculator() {
  const selector = useSelector(state => state.bank.dataForm);
  // const [interest, setInterest] = useState(null);

 
  const [installments, setInstallments] = useState([]);
 
  
   
     const calculate = (amount, years, rate) => {
        const loan = new LoanJS.Loan(amount, years * 12, rate);
       setInstallments(loan.installments);
   };
   
   const amountFormat = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  
   
  const arrayLength = installments.length;
  const resSum = installments[1]?.installment;
  const sumPaymentAmount = arrayLength * resSum;
  // const interestPaid = sumPaymentAmount - interest;
  // const interestPaid = sumPaymentAmount;
 



  const handelChange = e => {
    const get = (e.target.value)
    const res = (selector.filter(sel => sel.bancname.toLowerCase().includes(get)))
  //  setInterest(res[0].interestrate)
      res.map(({ interestrate, maximumcredit, loanterm }) => (
       calculate(
     interestrate,maximumcredit,loanterm
      ))
    
    );
  }
  
 
  return (
    <Container>
      <h1>Mortgage Calculator</h1>
      <h3>Choose a bank and get the calculation of your loan:</h3>
    
          <Select id="" onChange={handelChange} >
         
         <Option value={'choose a bank'}>choose a bank</Option>
        {selector.map(({ bancname, id }) => (
          <Option key={id}>{bancname}</Option>
        ))}
      
          </Select>

      {!!installments?.length && (
        <Table>
          <thead>
            <tr>
              <Th>Month</Th>
              <Th>Payment Amount</Th>
              <Th>Interest Paid</Th>
              <Th>Principal Paid</Th>
              <Th>Remain</Th>
            </tr>
          </thead>

          <tbody>
            {installments.map((i, ind) => (
              <tr key={ind}>
                <Td>{ind}</Td>
                <Td>{amountFormat(i.installment)}</Td>
                <Td>{amountFormat(i.interest)}</Td>
                <Td>{amountFormat(i.capital)}</Td>
                <Td>{amountFormat(i.remain)}</Td>
                  
              </tr>
            ))}
              </tbody>
              <tfoot>
                 {installments &&
                   <tr>
                <Td>Amount</Td>
                    <Td>{amountFormat(sumPaymentAmount)}</Td>
                    <Td>-</Td>
                    
                {/* <Td>{amountFormat(interest)}</Td> */}
                    <Td>-</Td>
                    <Td>{amountFormat(0)}</Td>
                 </tr>
                 }
              </tfoot>
        </Table>
      )}
    </Container>
  )
}












// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import LoanJS from "loanjs";
// import {
//    CalculateButton,
//    Container,
//    FormItem,
//    FormAction,
//    FormInput,
//    Input,
//    Table,
//    Th,
//    Td
// } from './MorgateCalculator.styles'

// export default function MortgageCalculator() {
// const selector = useSelector(state => state.bank.dataForm);
//    console.log(selector)

//   const [values, setValues] = useState({
//     "loan-amount": 0,
//     "loan-term": 0,
//     "interest-rate": 0,
//   });
//    const [installments, setInstallments] = useState([]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     calculate(
//       values["loan-amount"],
//       values["loan-term"],
//       values["interest-rate"]
//      );
      
//    };
   
//      const calculate = (amount, years, rate) => {
//         const loan = new LoanJS.Loan(amount, years * 12, rate);
//         setInstallments(loan.installments);
//    };
   
//    const amountFormat = (amount) =>
//     new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(amount);
  
   
//    const arrayLength = installments.length;
//    const resSum = installments[1]?.installment ;
//    const sumPaymentAmount = arrayLength * resSum;
//    const interestPaid = sumPaymentAmount - values['loan-amount'];
 
//   return (
//     <Container>
//       <h1>Mortgage Calculator</h1>

//         <form onSubmit={handleSubmit}>
        
//         <FormItem>
//           <label htmlFor="loan-amount">Loan Amount</label>
//           <FormInput>
//             <Input
//               type="number"
//               name="loan-amount"
//               placeholder="0"
//               value={values["loan-amount"]}
//               onChange={handleInputChange}
//             />
//           </FormInput>
//         </FormItem>
//         <FormItem>
//           <label htmlFor="interest-rate">Interest Rate</label>
//           <FormInput>
//             <Input
//               type="number"
//               name="interest-rate"
//               placeholder="0"
//               value={values["interest-rate"]}
//               onChange={handleInputChange}
//             />
//           </FormInput>
//         </FormItem>
//         <FormItem>
//           <label htmlFor="loan-term">Loan Term (Years)</label>
//           <FormInput>
//             <Input
//               type="number"
//               name="loan-term"
//               placeholder="0"
//               value={values["loan-term"]}
//               onChange={handleInputChange}
//             />
//           </FormInput>
//         </FormItem>
//         <FormAction>
//           <CalculateButton
//             type="submit"
//             value="Calculate"
//           ></CalculateButton>
//         </FormAction>
//       </form>

//       {!!installments?.length && (
//         <Table>
//           <thead>
//             <tr>
//               <Th>Month</Th>
//               <Th>Payment Amount</Th>
//               <Th>Interest Paid</Th>
//               <Th>Principal Paid</Th>
//               <Th>Remain</Th>
//             </tr>
//           </thead>

//           <tbody>
//             {installments.map((i, ind) => (
//               <tr key={ind}>
//                 <Td>{ind}</Td>
//                 <Td>{amountFormat(i.installment)}</Td>
//                 <Td>{amountFormat(i.interest)}</Td>
//                 <Td>{amountFormat(i.capital)}</Td>
//                   <Td>{amountFormat(i.remain)}</Td>
                  
//               </tr>
//             ))}
//               </tbody>
//               <tfoot>
//                  {installments &&
//                    <tr>
//                     <Td>Amount</Td>
//                     <Td>{amountFormat(sumPaymentAmount)}</Td>
//                     <Td>{amountFormat(interestPaid)}</Td>
//                     <Td>-</Td>
//                     <Td>-</Td>
//                  </tr>
//                  }
//               </tfoot>
//         </Table>
//       )}
//     </Container>
//   )
// }
