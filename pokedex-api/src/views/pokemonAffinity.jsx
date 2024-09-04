import Table from 'react-bootstrap/Table';
import '../assets/styles/PokemonAffinity.scss';

function PokemonAffinity() {
  const types = ['Acier', 'Combat', 'Dragon', 'Eau', 'Electrik', 'Fée', 'Feu', 'Glace','Insecte', 'Normal', 'Plante', 'Poison', 'Psy', 'Roche', 'Sol', 'Spectre', 'Ténèbres', 'Vol'];

  const affinities = {
    Acier: [0.5, 1, 1, 0.5, 0.5, 0.5, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
    Combat: [2, 1, 1, 1, 1, 1, 0.5, 2, 0.5, 2, 1, 0.5, 0.5, 2, 1, 0, 2, 0.5],
    Dragon: [0.5, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    Eau:      [0.5, 1, 0.5, 0.5, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1],
    Electrik: [0.5, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0, 1, 1, 2],
    Fée:      [0.5, 2, 0, 1, 1, 1, 0.5, 1, 0.5, 1, 1, 0.5, 1, 1, 1, 1, 2, 1],
    Feu:      [0.5, 1, 1, 2, 1, 1, 0.5, 2, 2, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 1],
    Glace:    [0.5, 1, 0.5, 0.5, 1, 1, 2, 0.5, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2],
    Insecte:  [0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 2, 1, 2, 1, 1, 0.5, 2, 0.5],
    Normal:   [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 0, 1, 1],
    Plante:   [0.5, 1, 0.5, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 2, 1, 2, 2, 1, 1, 0.5],
    Poison:   [0.5, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 1],
    Psy:      [0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0, 1],
    Roche:    [0.5, 0.5, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 2],
    Sol:      [2, 1, 1, 1, 2, 1, 2, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1],
    Spectre:  [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 2, 0.5, 1],
    Ténèbres: [0.5, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 0.5, 1],
    Vol:      [0.5, 2, 1, 1, 0.5, 1, 1, 2, 2, 1, 0.5, 1, 1, 0.5, 1, 1, 1, 1]
  };

  const getClassNameForAffinity = (value) => {
    if (value === 2) return 'superEfficace';
    if (value === 1) return 'efficace';
    if (value === 0.5) return 'pasEfficace';
    if (value === 0) return 'insensible';
    return '';
  };

  return (
    <Table bordered hover size="md">
      <thead>
        <tr>
          <th>Type</th>
          {types.map((type) => (
            <th key={type} className={`${type.toLowerCase()}Color`}>{type}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {types.map((type) => (
          <tr key={type}>
            <th className={`${type.toLowerCase()}Color`}>{type}</th>
            {affinities[type].map((affinity, i) => (
              <td key={i} className={getClassNameForAffinity(affinity)}>{affinity}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PokemonAffinity;

