import './App.css';
import { useFormik } from "formik";
import { valiDateSchema } from './Schema'

function App() {
  const valuesForm = {
    name: '',
    password: ''
  }
  const { handleChange, values, handleSubmit, errors, touched } = useFormik({
    initialValues: valuesForm,
    validationSchema: valiDateSchema,
    onSubmit: (values) => {
      console.log('values::: ', values);
    }
  })

  return (
    <>
      <div className="form">
        <form onSubmit={ handleSubmit }>
          <input
            type="name"
            name='name'
            id='name'
            onChange={ handleChange }
            value={ values.email } />
          <input
            type="password"
            name='password'
            id='password'
            onChange={ handleChange }
            value={ values.password } />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
