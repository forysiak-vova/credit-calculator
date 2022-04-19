import {
   CalculateButton,
   Container,
   FormItem,
   FormAction,
   FormInput,
   Input,
   Table,
   Th,
   Td
} from './Banc.styles';
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


   const [resOfForm, setResOfForm] = useState(null);
  console.log(resOfForm)
   const handleInputChange = e => {
      const { name, value } = e.target;
      switch (name) {
         case 'banc-name':
            setBancname(value);
            break;
         case 'interest-rate':
            setInterestrate(value);
            break;
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
    setResOfForm({bancname, interestrate})
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
{/* 
               <FormItem>
            <label htmlFor="maximum-credit">Maximum Credit</label>
            <FormInput>
               <Input
                  type='number'
                     name='maximum-credit'
                     value={values['maximum-credit']}
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
                     value={values['minimum-contribution']}
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
                     value={values['loan-term']}
                     onChange={handleInputChange}
               />
            </FormInput>
            </FormItem> */}
         <FormAction>
            <CalculateButton type="submit">Create Banc</CalculateButton>
        </FormAction>
      </form>
            </Container>
   )
};

export default Banc;