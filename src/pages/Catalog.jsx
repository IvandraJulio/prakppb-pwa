import { useState, useMemo } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

function Catalog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  // Extract all unique weapon types
  const categories = useMemo(() => {
    const types = Array.from(new Set(GUNS.map((g) => g.type)))
    return ['All', ...types]
  }, [])

  // Filter and Sort guns
  const processedGuns = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    // 1. Filter by category & search query
    let result = GUNS.filter((gun) => {
      const matchType = selectedType === 'All' || gun.type === selectedType
      const matchSearch =
        query === '' ||
        gun.name.toLowerCase().includes(query) ||
        gun.type.toLowerCase().includes(query) ||
        gun.caliber.toLowerCase().includes(query) ||
        gun.description.toLowerCase().includes(query)

      return matchType && matchSearch
    })

    // 2. Sort results
    if (sortBy === 'name-asc') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'name-desc') {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name))
    } else if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price)
    }

    return result
  }, [searchQuery, selectedType, sortBy])

  const handleReset = () => {
    setSearchQuery('')
    setSelectedType('All')
    setSortBy('default')
  }

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, shotguns, SMGs, and sniper rifles. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>

      {/* Search, Filter & Sort Controls Section */}
      <section className="controls-section">
        {/* Search Bar */}
        <div className="search-bar">
          <div className="search-input-wrapper">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search weapons by name, type, caliber..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search guns"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="sort-wrapper">
            <label htmlFor="sort-select" className="control-label">Sort by:</label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="name-asc">Name (A – Z)</option>
              <option value="name-desc">Name (Z – A)</option>
              <option value="price-asc">Price (Lowest first)</option>
              <option value="price-desc">Price (Highest first)</option>
            </select>
          </div>
        </div>

        {/* Type Filter Pills */}
        <div className="filter-wrapper">
          <span className="control-label">Type:</span>
          <div className="filter-pills" role="tablist" aria-label="Weapon type filters">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? GUNS.length
                  : GUNS.filter((g) => g.type === cat).length
              const isActive = selectedType === cat
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedType(cat)}
                >
                  <span className="filter-name">{cat}</span>
                  <span className="filter-badge">{count}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Catalog Listing */}
      <section>
        <div className="list-head">
          <h2>
            {selectedType === 'All' ? 'Current stock' : `${selectedType} stock`}
            {searchQuery && ` matching "${searchQuery}"`}
          </h2>
          <span className="count">
            {processedGuns.length} {processedGuns.length === 1 ? 'piece' : 'pieces'}
          </span>
        </div>

        {processedGuns.length === 0 ? (
          <div className="no-guns-box">
            <p className="no-guns-message">no guns match</p>
            <p className="no-guns-sub">Try adjusting your search terms or filter selection.</p>
            <button type="button" className="reset-filter-btn" onClick={handleReset}>
              Reset Filters
            </button>
          </div>
        ) : (
          <ul className="stock">
            {processedGuns.map((gun) => (
              <GunCard key={gun.name} gun={gun} />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Catalog
