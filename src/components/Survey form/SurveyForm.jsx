import React, { useState } from "react";
import swal from "sweetalert";
import "animate.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Button, Modal } from "antd";
import "./survey.css";
import { FormOutlined } from "@ant-design/icons";

export default function SurveyForm(prop) {
  const { isDisplay } = prop;
  const clickOk = () => {
    swal(
      <div>
        <h1>Hello world!</h1>
        <p>This is now rendered with JSX!</p>
      </div>
    );
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="survey">
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"80%"}
      >
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol size="6">
              <MDBCard>
                <MDBCardBody>
                  <div className="text-center">
                    <MDBIcon far icon="file-alt mb-3 text-primary" size="4x" />
                    <p>
                      <strong>Your opinion matters</strong>
                    </p>
                    <p>
                      Have some ideas how to improve our product?
                      <strong>Give us your feedback.</strong>
                    </p>
                  </div>

                  <hr />

                  <form className="px-4" action="">
                    <p className="text-center">
                      <strong>Your rating:</strong>
                    </p>
                    <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      label="Very good"
                      className="mb-2"
                      defaultChecked
                    />
                    <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      label="Good"
                      className="mb-2"
                    />
                    <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      label="Medicore"
                      className="mb-2"
                    />
                    <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      label="Bad"
                      className="mb-2"
                    />
                    <MDBRadio
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                      label="Very bad"
                      className="mb-2"
                    />
                    <p className="text-center">
                      <strong>What could we improve?</strong>
                    </p>
                    <MDBTextArea
                      className="mb-4"
                      label="Message"
                      id="textAreaExample"
                      rows={4}
                    />
                  </form>
                </MDBCardBody>
                <MDBCardFooter>
                  <div className="text-end">
                    <MDBBtn onClick={clickOk}>Submit</MDBBtn>
                  </div>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Modal>
      <Button
        type="primary"
        onClick={showModal}
        className={`${!isDisplay ? "d-none" : ""} btn_survey wow animate__ animate__fadeInDown`}
      >
        <FormOutlined />
      </Button>
    </div>
  );
}
