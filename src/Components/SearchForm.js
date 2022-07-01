import SearchIcon from "@mui/icons-material/Search";

const SearchForm = () => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 32) e.preventDefault();
  };

  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          onKeyDown={handleKeyDown}
        />
        <SearchIcon
          color="success"
          variant="contained"
          fontSize="large"
          viewBox="0 0 24 24"
          title="Buscar"
        >
          Buscar
        </SearchIcon>
      </form>
    </div>
  );
};

export default SearchForm;
