/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 13, 2018
*************************************************************************/

function triangulars(sequence = [ ]) {
  const lim = sequence.length;
  let triangs = 0;
  let n;
  for (let i=0; i < lim; ++i) {
    if ((n = sequence[i]-1) >= lim || n < i)
      continue;
    if ((n = sequence[n]-1) >= lim || n < i)
      continue;
    if ((n = sequence[n]-1) >= lim || n < i)
      continue;
    if (n == i && i != sequence[n]-1)
      ++triangs;
  }
  return triangs;
}

export { triangulars };
