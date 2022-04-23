import {
   Tables,
   Th,
   Td,
   Button
} from './table.styles';
import { useDispatch } from 'react-redux';
import { deleteBank } from '../redux/bankSlice.js';

   
   const amountFormat = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);


const Table = ({ dataForm }) => {
   // console.log(dataForm);
   const dispatch = useDispatch();

   return (
      <Tables>
           <thead>
            <tr>
              <Th>Bank name</Th>
              <Th>Loan Amount</Th>
              <Th>Loan Term</Th>
               <Th>Interest Rate</Th>
               <Th>Delete Bank</Th>
            </tr>
         </thead>
          <tbody>
            {dataForm.map(({bancname, interestrate, maximumcredit, minimumcontribution, loanterm, id}, ind) => (
               <tr key={id}>
                  <Td>{bancname}</Td>
                  <Td>{amountFormat(interestrate)}</Td>
                <Td>{maximumcredit}</Td>
                  <Td>{loanterm}%</Td>
                  <Td>{ <Button type='button' onClick={() => dispatch(deleteBank(id))}>delete</Button>}</Td>
                 
              </tr>
             ))} 
              </tbody>
      </Tables>
   )
};

export default Table;