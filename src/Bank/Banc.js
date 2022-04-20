import {
   CalculateButton,
   Container,
   FormItem,
   FormAction,
   FormInput,
   Input,
} from './Banc.styles';
import Table from '../Table';
import { useState } from 'react';

const Banc = () => {
  
   // const [values, setValues] = useState({
   //    'banc-name': 0,
   //    'interest-rate': 0,
   //    'maximum-credit': 0,
   //    'minimum-contribution': 0,
   //    'loan-term': 0,

   // });
   const [bancname, setBancname] = useState('');
   const [interestrate, setInterestrate] = useState('');
   const [maximumcredit, setMaximumcredit] = useState('');
   const [minimumcontribution, setMinimumcontribution] = useState('');
   const [loanterm, setLoanterm] = useState('');


   const [dataForm, setDataForm] = useState('');
  console.log(dataForm)
   const handleInputChange = e => {
      const { name, value } = e.target;
      switch (name) {
         case 'banc-name':
            setBancname(value);
            break;
         case 'interest-rate':
            setInterestrate(value);
            break;
         case 'maximum-credit':
            setMaximumcredit(value)
            break;
         case 'minimum-contribution':
            setMinimumcontribution(value);
            break;
         case 'loan-term':
            setLoanterm(value);

         default:
            return;

      }
      // setValues({
      //    // ...values,
      //    [name]: value,
      // })
   };

   const handelSubmit = e => {
      e.preventDefault();
      // console.log(values['banc-name'], values['interest-rate'], values['maximum-credit'])
      // const obj = (values['banc-name'], values['interest-rate'], values['maximum-credit'])
      const data = { bancname, interestrate, maximumcredit, minimumcontribution, loanterm }
      setDataForm(prevState => [data, ...prevState]);
      setBancname('');
      setInterestrate('');
      setMaximumcredit('');
      setMinimumcontribution('');
      setLoanterm('');

   }

   return (
      <Container>
         <h1>Create a Bank</h1>

      <form onSubmit={handelSubmit}>
            
           <FormItem>
            <label htmlFor="banc-name">Bank name</label>
            <FormInput>
               <Input
                     type='text'
                      placeholder="banc-name"
                     name='banc-name'
                     value={bancname}
                      onChange={handleInputChange}
               />
            </FormInput>
         </FormItem>
         
               <FormItem>
            <label htmlFor="interest-rate">Interest rate</label>
            <FormInput>
               <Input
                  type='number'
                     name='interest-rate'
                       placeholder="interest-rate"
                     value={interestrate}
                     onChange={handleInputChange}
               />
            </FormInput>
            </FormItem>

               <FormItem>
            <label htmlFor="maximum-credit">Maximum Credit</label>
            <FormInput>
               <Input
                  type='number'
                     name='maximum-credit'
                     value={maximumcredit}
                     onChange={handleInputChange}
               />
            </FormInput>
            </FormItem>

               <FormItem>
            <label htmlFor="minimum-contribution">Minimum Contribution</label>
            <FormInput>
               <Input
                  type='number'
                     name='minimum-contribution'
                     value={minimumcontribution}
                     onChange={handleInputChange}
               />
            </FormInput>
            </FormItem>

               <FormItem>
            <label htmlFor="loan-term">Loan Term</label>
            <FormInput>
               <Input
                  type='number'
                     name='loan-term'
                     value={loanterm}
                     onChange={handleInputChange}
               />
            </FormInput>
            </FormItem>
         <FormAction>
            <CalculateButton type="submit">Create Banc</CalculateButton>
        </FormAction>
         </form>
         {dataForm && <Table dataForm={dataForm}/>}
               
            </Container>
   )
};

export default Banc;