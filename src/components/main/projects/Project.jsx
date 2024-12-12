import React, { useState } from "react";
import useWindowDimensions from "../../../hooks/WindowDimensions";
import Carousel from "react-bootstrap/Carousel";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { SimpleSlider } from "./SimpleSlider";
import { Modal } from "react-responsive-modal";
import Chip from "../../ui/Chip";

import "react-responsive-modal/styles.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "./projects.scss";

const Project = ({ project, scrollPosition }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useWindowDimensions();

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card project-card card-zoom bg-dark mt-4 rounded-sm">
      <div className="card-body ">
        <div className="row">
          <div className="col-lg-4 carousel-container">
            <Carousel controls={false} indicators={false}>
              {project.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    visibleByDefault={true}
                    className="carousel-image-tint project-image"
                    style={{ height: "250px" }}
                    src={require(`../../../assets/images/projects/${image.filename}`)}
                    alt={image.header}
                  ></LazyLoadImage>
                  <div className="overlay" role="button" onClick={onOpenModal}>
                    <h3 className="text-light overlay-text text-center">
                      DETAILS
                    </h3>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <section className="col-lg-8 mt-2 mt-lg-0">
            <h3 className="less-letter-spacing capital-case text-lighter">
              {project.header}
            </h3>
            <h6 className=" mb-2 text-muted less-letter-spacing capital-case">
              <span className="mb-2">{project.date}</span>
              <span className="ml-2">
                {project.stack.map((tech) => (
                  <Chip tech={tech} />
                ))}
              </span>
            </h6>
            <small>
              <p
                className="card-text text-lighter mb-2"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {project.description}
              </p>
            </small>
            <div className="d-flex">
              <button
                className={
                  width > 991
                    ? "btn btn-sm slide-up-button mr-2"
                    : "btn btn-sm slide-up-button mr-2 flex-grow-1"
                }
                onClick={onOpenModal}
              >
                Details
              </button>
              {project.url !== "" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    width > 991
                      ? "btn btn-sm slide-up-button mr-2"
                      : "btn btn-sm slide-up-button mr-2 flex-grow-1"
                  }
                >
                  Visit Site
                </a>
              )}
              {project.repoUrl !== "" && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    width > 991
                      ? "btn btn-sm slide-up-button "
                      : "btn btn-sm slide-up-button  flex-grow-1"
                  }
                >
                  <i className="fab fa-github" style={{ fontSize: "13px" }}></i>
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
      <div>
        <Modal
          open={isModalOpen}
          onClose={onCloseModal}
          blockScroll={false}
          showCloseIcon={false}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <SimpleSlider project={project}></SimpleSlider>
        </Modal>
      </div>
    </div>
  );
};

export default Project;
