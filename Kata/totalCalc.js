// Total Pressure Calculation (8Kyu)
/*
Given the molecular mass of two molecules M1M_1M and M2M_2M, their masses present m1m_1m 
and m2m_2m in a vessel of volume VVV at a specific temperature TTT, find the total pressure PtotalP_{total}P 
total exerted by the molecules. Formula to calculate the pressure is:

Ptotal=(m1M1+m2M2)RTV\LARGE P_{total} = {{({{m_1} \over {M_1}} + {{m_2} \over {M_2}}) R T} \over V}
P total= V(M1/m1 + M2/m2)RT
Input
Six values :
M1M_1M 1, M2M_2M : molar masses of both gases, in grams (ggg)
m1m_1m 
1
  and m2m_2m 
2: present mass of both gases, in  g⋅mol−1\ g \cdot mol^{-1} g⋅mol 
−1
 
VVV: volume of the vessel, in  dm3\ dm^3 dm 
3
 
TTT: temperature, in  °C\ \degree C °C
Output
One value: PtotalP_{total}P 
total, in units of atm.

Notes
Remember: Temperature is given in Celsius while SI unit is Kelvin (KKK).  0°C=273.15K\ 0\degree C = 273.15K 0°C=273.15K

The gas constant  R=0.082dm3⋅atm⋅K−1⋅mol−1\ R = 0.082dm^3 \cdot atm \cdot K^{-1} \cdot mol^{-1} R=0.082dm 
3⋅atm⋅K −1⋅mol −1
*/

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    return (givenMass1/molarMass1 + givenMass2/molarMass2) * 0.082 * (temp+273.15) / volume;
  }
