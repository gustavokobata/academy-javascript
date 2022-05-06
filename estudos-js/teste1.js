const limes = [
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',
    'medium',
  ];

function limesToCut(wedgesNeeded, limes) {
    const mapSmall = limes.map(small => 6);
    const mapMedium = mapSmall.map(medium => 8);
    const mapTotal = mapMedium.map(large => 10);
    return mapTotal
}

  console.log(limesToCut(25, limes));
    