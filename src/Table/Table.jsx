import {
   Tables,
   Th,
   Td
} from './table.styles'


const Table = ({ dataForm }) => {
   console.log(dataForm)
   return (
      <Tables>
           <thead>
            <tr>
              <Th>Bank name</Th>
              <Th>Interest rate</Th>
              <Th>Maximum Credit</Th>
              <Th>Minimum Contribution</Th>
              <Th>Loan Term</Th>
            </tr>
         </thead>
          <tbody>
            {dataForm.map(({bancname, interestrate, maximumcredit, minimumcontribution, loanterm}, ind) => (
              <tr key={ind}>
                  <Td>{bancname}</Td>
                  <Td>{interestrate}</Td>
                <Td>{maximumcredit}</Td>
                <Td>{minimumcontribution}</Td>
                  <Td>{loanterm}</Td>
                  
              </tr>
             ))} 
              </tbody>
      </Tables>
   )
};

export default Table;