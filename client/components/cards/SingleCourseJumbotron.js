import { currencyFormatter } from "../../utils/helpers";
import ReactPlayer from 'react-player';
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// Replace Ant Design icons with alternative icons
import { BsFillAlarmFill } from 'react-icons/bs'; // Example of alternative icon

const SingleCourseJumbotron = ({
    course,
    showModal,
    setShowModal,
    preview,
    setPreview,
    loading,
    user,
    handlePaidEnrollment,
    handleFreeEnrollment,
    enrolled,
    setEnrolled
}) => {
    const { name, description, instructor, updatedAt, lessons, image, price, paid, category } = course;

    return (
        <div className="jumbotron bg-primary square">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="text-light font-weight-bold">{name}</h1>
                    <p className="lead">{description && description.substring(0, 160)}...</p>
                    <Badge variant="primary" className="pb-4 mr-2">
                        {category}
                    </Badge>
                    <p>Created by {instructor.name}</p>
                    <p>Last updated {new Date(updatedAt).toLocaleDateString("en-US")}</p>

                    <h4 className="textW-light">
                        {paid ? (
                            currencyFormatter({
                                amount: price,
                                currency: "usd",
                            })
                        ) : (
                            "Free"
                        )}
                    </h4>
                </div>
                <div className="col-md-4 mt-3">
                    {lessons[0].video && lessons[0].video.Location ? (
                        <div
                            onClick={() => {
                                setPreview(lessons[0].video.Location);
                                setShowModal(!showModal);
                            }}
                        >
                            <ReactPlayer
                                className="react-player-div"
                                url={lessons[0].video.Location}
                                light={image.Location}
                                playing={true}
                                width="100%"
                                height="225px"
                            />
                        </div>
                    ) : (
                        <>
                            <img src={image.Location} alt={name} className="img img-fluid" />
                        </>
                    )}
                    {loading ? (
                        <div className="d-flex justify-content-center">
                            <BsFillAlarmFill className="h1 text-danger" /> {/* Example of alternative icon */}
                        </div>
                    ) : (
                        <Button
                            className="mb-3 mt-3"
                            variant="danger"
                            block
                            shape="round"
                            disabled={loading}
                            style={{ backgroundColor: "lightgreen" }}
                            onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
                        >
                            {user ? (enrolled.status ? "Go to Course" : "Enroll") : "Login to Enroll"}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleCourseJumbotron;
