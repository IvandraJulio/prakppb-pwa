import { useRef } from 'react'

function GunCard({ gun }) {
  const popup = useRef(null)

  return (
    <li className="card">
      <button className="card-btn" onClick={() => popup.current.showModal()}>
        <div className="card-img-wrap">
          <img className="card-img" src={gun.image} alt={gun.name} loading="lazy" />
        </div>
        <div className="card-content">
          <span className="name display">{gun.name}</span>
          <span className="type">
            {gun.type} · {gun.caliber}
          </span>
          <span className="price">${gun.price.toLocaleString()}</span>
        </div>
      </button>

      <dialog
        className="popup"
        ref={popup}
        onClick={(e) => e.target === popup.current && popup.current.close()}
      >
        <div className="popup-img-wrap">
          <img className="popup-img" src={gun.image} alt={gun.name} />
        </div>
        <h3 className="display">{gun.name}</h3>
        <p className="type">
          {gun.type} · {gun.caliber} · <span className="price">${gun.price.toLocaleString()}</span>
        </p>
        <p>{gun.description}</p>
        <form method="dialog">
          <button className="popup-close">Close</button>
        </form>
      </dialog>
    </li>
  )
}

export default GunCard
