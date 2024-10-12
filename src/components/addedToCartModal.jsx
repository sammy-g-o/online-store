/* eslint-disable react/prop-types */
function AddedToCartModal({ setModal, modal}) {
  return (
    <section className="modal">
      <div className="container">
        <div className="inner-wrap">
          <div>
            <p>{modal} was added to cart</p>
          <button onClick={() => setModal(false)}>close</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddedToCartModal;
