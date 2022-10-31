import React, { useState, useEffect } from 'react'
import { useUserForm } from './../../hooks/Custom.Hooks';

export const UserForm = () => {

  const { form, setForm, handleChanges } = useUserForm();
  const [areEquals, setAreEquals] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value)
  }

  useEffect(() => {
    const { password } = form;
    setAreEquals(password === passwordConfirmation);
  }, [passwordConfirmation])


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" name="email" aria-describedby="emailHelp" onChange={handleChanges} />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" name="password" onChange={handleChanges} />
      </div>
      <div className="mb-3 form-check">
        <label for="exampleInputPassword1" className="form-label">Repetir Password</label>
        <input type="password" className="form-control" name="password2" onChange={handlePasswordConfirmation} />

        {!areEquals && (
          <div className='form-text list-group-item-danger'>Las claves no son iguales</div>
        )}

      </div>

      <button disabled={!areEquals}
        type="submit"
        className="btn btn-primary"
        onClick={handleSubmit}>Submit</button>
    </form>
  )
}



