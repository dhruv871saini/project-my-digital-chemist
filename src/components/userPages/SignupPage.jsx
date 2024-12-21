import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Signup Successful');
    // Proceed with signup API call here
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-md-6 bg-secondary p-5">
          <h2 className="text-center mb-4 text-light fw-bold">Create an Account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="shadow-sm p-4 border rounded">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
               
              />
              {errors.confirmPassword && (
                <p className="text-danger">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Sign Up
            </button>

            <div className="mt-3 text-center">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
