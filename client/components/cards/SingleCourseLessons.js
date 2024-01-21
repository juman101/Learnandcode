import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

const SingleCourseLessons = ({ lessons, setPreview, showModal, setShowModal }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto mt-4">
                        {lessons && <h3 className="text-center mb-4">{lessons.length} Lessons</h3>}
                        <ul className="list-group">
                            {lessons.map((item, index) => (
                                <li key={index} className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="mr-3">
                                            <div className="avatar bg-primary text-white d-flex align-items-center justify-content-center rounded-circle" style={{ width: '30px', height: '30px' }}>
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="lesson-title" style={{ marginLeft: '8px' }}>{item.title}</div>
                                        </div>
                                        {item.video && item.video !== null && item.free_preview && (
                                            <span
                                                className="text-primary pointer"
                                                onClick={() => {
                                                    setPreview(item.video.Location);
                                                    setShowModal(!showModal);
                                                }}
                                            >
                                                <BsFillPlayFill /> Preview
                                            </span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleCourseLessons;
