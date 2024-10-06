import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import icon from "../../Assets/Images/ChitChatIcon.png";
import leftHalfImage from "../../Assets/Images/LeftHalfLogin.png";

const styles = {
  myCoolButton: {
    marginBottom: "2vh",
    fontSize: "10px",
    background: "#EDF5F6",
  },
};

export default function LoginForm() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundImage: `url(${leftHalfImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "50vw",
          height: "100vh",
          display: "flex",
        }}
      ></div>
      <div
        style={{
          width: "28%",
          marginTop: "4%",
          marginLeft: "2%",
        }}
      >
        <div
          style={{
            height: "50vh",
            border: "1px solid #E5E9E9",
            padding: "5vh 5vh 5vh 5vh",
          }}
        >
          <img src={icon} style={{ marginBottom: "5vh", width: "80%" }} />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Phone number, username or email"
                style={styles.myCoolButton}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                style={styles.myCoolButton}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", fontSize: "12px", marginTop: "3vh" }}
            >
              Log in
            </Button>
          </Form>
          <br />
          <a href="#">
            <Form.Text style={{ fontSize: "12px" }}>Forgot password?</Form.Text>
          </a>
        </div>
        <div
          style={{
            height: "10vh",
            border: "1px solid #E5E9E9",
            marginTop: "4%",
            padding: "3vh 5vh 5vh 5vh",
          }}
        >
          <span>Don't have an account? </span>
          <a href="#"> Sign up</a>
        </div>
      </div>
    </div>
  );
}
