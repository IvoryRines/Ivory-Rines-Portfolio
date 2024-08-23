import resume from "../assets/Resume.pdf";

export default function Resume() {
  return (
    <div>
      <iframe
        src={resume}
        width="100%"
        height="800px"
        style={{ border: "none" }}
        title="Resume"
      >
        This browser does not support PDFs. Please download the PDF to view it:{" "}
        <a href={resume}>Download PDF</a>.
      </iframe>
    </div>
  );
}
