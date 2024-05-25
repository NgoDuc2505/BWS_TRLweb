import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import './login.css';

function Login() {
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-auto'>
      <MDBRow>
        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-fixed rounded-circle shadow-5-strong" style={{ backgroundColor: '#FF4C4C', width: '200px', height: '200px', top: '-60px', left: '-60px' }}></div>
          <div id="radius-shape-2" className="position-fixed shadow-5-strong" style={{ backgroundColor: '#4CFF72', width: '300px', height: '300px', bottom: '-120px', right: '-120px' }}></div>

          <MDBCard className='my-5 bg-glass' style={{ borderRadius: '20px' }}>
            <MDBCardBody className='p-5'>
              <MDBRow>
              <MDBCol md='12' className='mb-2' style={{ marginBottom: '10px' }}>
                  <div className='text-center' style={{ fontSize: '30px', color: 'hsl(218, 61%, 36%)', fontWeight: 'b', paddingBottom: '20px' }}>Welcome back</div>
                  <MDBInput wrapperClass='mb-2' label='Username' id='form1' type='text' style={{ marginBottom: '10px' }} />
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-2' label='Password' id='form4' type='password' style={{ marginBottom: '10px' }} />

              <div className='d-flex justify-content-center mb-4'>
                <p>Don't have an account? <a href="#" style={{ textDecoration: 'none' }}>Sign up here!</a></p>
              </div>

              <MDBBtn className='w-100 mb-4' size='md' style={{ marginTop: '-30px' }}>Login</MDBBtn>


              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center' style={{ marginTop: '-50px' }}>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)', lineHeight: '1.2' }}>
            Login to our web <br />
            <span style={{ color: 'hsl(218, 81%, 75%)',fontSize:'50px',lineHeight:'1' }}>Many discounts are waiting for you</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)', lineHeight: '1.2' }}>
            Take a cup of coffee, a cup of tea, or anything that makes you feel concentrated. Turn the music on,
            open your notes, and get ready for a new adventure with us!
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
 