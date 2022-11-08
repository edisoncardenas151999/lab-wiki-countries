import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { id } = useParams();

  const foundCountry = countries.find((country) => {
    return country.alpha3Code === id;
  });

  return (
    <div className="col-7">
      <h1>{foundCountry?.name?.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={styles.firstTd}>Capital</td>
            <td>{foundCountry?.capital?.join(', ')}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry?.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className="borders">
                {foundCountry?.borders?.map((borderCountryCode) => {
                  const foundBorderCountry = countries.find((country) => {
                    return country.alpha3Code === borderCountryCode;
                  });
                  return (
                    <li>
                      <Link to={`/${borderCountryCode}`}>
                        {foundBorderCountry?.name?.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  firstTd: {
    width: '30%',
  },
};

export default CountryDetails;
