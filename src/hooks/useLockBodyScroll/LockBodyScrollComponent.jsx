// A dummy Component to show real life usecase

function Modal({ title, content, onClose }) {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
