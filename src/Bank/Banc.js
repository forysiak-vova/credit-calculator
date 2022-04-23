import {
   CalculateButton,
   Container,
   FormItem,
   FormAction,
   FormInput,
   Input,
} from './Banc.styles';
import { nanoid } from 'nanoid';
import Table from '../Table';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addData} from '../redux/bankSlice'

const Banc = () => {
   const dispatch = useDispatch();
   const selector = useSelector(state => state.bank.dataForm);
   // console.log(selector)
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
//   console.log(dataForm)
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
      const data = { id: nanoid(), bancname, interestrate, maximumcredit, minimumcontribution, loanterm }
      setDataForm(prevState => [data, ...prevState]);
      if (!data) {
         return
      }
      dispatch(addData(data))
      setBancname('');
      setInterestrate('');
      setMaximumcredit('');
      setMinimumcontribution('');
      setLoanterm('');

   };

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
            <label htmlFor="interest-rate">Loan Amount</label>
            <FormInput>
               <Input
                  type='number'
                     name='interest-rate'
                       placeholder="loan-amount"
                     value={interestrate}
                     onChange={handleInputChange}
               />
            </FormInput>
            </FormItem>

               <FormItem>
            <label htmlFor="maximum-credit">Loan Term (Years)</label>
            <FormInput>
               <Input
                  type='number'
                     name='maximum-credit'
                     placeholder='loan-term'
                     value={maximumcredit}
                     onChange={handleInputChange}
               />
            </FormInput>
            </FormItem>

               {/* <FormItem>
            <label htmlFor="minimum-contribution">Minimum Contribution</label>
            <FormInput>
               <Input
                  type='number'
                     name='minimum-contribution'
                     value={minimumcontribution}
                     onChange={handleInputChange}
               />
            </FormInput>
            </FormItem> */}

               <FormItem>
            <label htmlFor="loan-term">Interest Rate</label>
            <FormInput>
               <Input
                  type='number'
                     name='loan-term'
                     placeholder='interest-rate'
                     value={loanterm}
                     onChange={handleInputChange}
               />
            </FormInput>
            </FormItem>
         <FormAction>
            <CalculateButton type="submit">Create Bank</CalculateButton>
        </FormAction>
         </form>
         {selector.length > 0 && <Table dataForm={selector}/>}
               
            </Container>
   )
};

export default Banc;