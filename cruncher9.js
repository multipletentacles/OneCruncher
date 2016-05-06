/*
 *	This file is part of OneCruncher.
 * 	Copyright (c) 2014, Nathan Foster.
 * 	
 * 	plythmiglaptical@gmail.com
 *
 *	OneCruncher is free software: you can redistribute it and/or modify
 *	it under the terms of the GNU General Public License as published by
 *	the Free Software Foundation, either version 3 of the License, or
 *	(at your option) any later version.
 *
 *	OneCruncher is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU General Public License for more details.
 *
 *	You should have received a copy of the GNU General Public License
 *	along with OneCruncher.  If not, see <http://www.gnu.org/licenses/>.
 */
 
var cruncher9 = new machine();
cruncher9.name = 'cruncher9';
cruncher9.theonecruncher = new onecruncher(23);
cruncher9.theonecruncher.parentmachine = cruncher9;
// Main block: row 1, card 1
cruncher9.theonecruncher.databank[0] = new onedata();
cruncher9.theonecruncher.databank[0].mult = 6;
cruncher9.theonecruncher.databank[0].lt = 1;
cruncher9.theonecruncher.databank[0].gte = 0;
cruncher9.theonecruncher.databank[0].crunchid = 0;
cruncher9.theonecruncher.databank[1] = new onedata();
cruncher9.theonecruncher.databank[1].mult = 6;
cruncher9.theonecruncher.databank[1].lt = 2;
cruncher9.theonecruncher.databank[1].gte = 1;
cruncher9.theonecruncher.databank[1].crunchid = 0;
cruncher9.theonecruncher.databank[2] = new onedata();
cruncher9.theonecruncher.databank[2].mult = 6;
cruncher9.theonecruncher.databank[2].lt = 3;
cruncher9.theonecruncher.databank[2].gte = 2;
cruncher9.theonecruncher.databank[2].crunchid = 0;
cruncher9.theonecruncher.databank[3] = new onedata();
cruncher9.theonecruncher.databank[3].mult = 6;
cruncher9.theonecruncher.databank[3].lt = 4;
cruncher9.theonecruncher.databank[3].gte = 3;
cruncher9.theonecruncher.databank[3].crunchid = 0;
cruncher9.theonecruncher.databank[4] = new onedata();
cruncher9.theonecruncher.databank[4].mult = 6;
cruncher9.theonecruncher.databank[4].lt = 5;
cruncher9.theonecruncher.databank[4].gte = 4;
cruncher9.theonecruncher.databank[4].crunchid = 0;
cruncher9.theonecruncher.databank[5] = new onedata();
cruncher9.theonecruncher.databank[5].mult = 6;
cruncher9.theonecruncher.databank[5].lt = 6;
cruncher9.theonecruncher.databank[5].gte = 5;
cruncher9.theonecruncher.databank[5].crunchid = 0;
// Main block: row 1, card 2
cruncher9.theonecruncher.databank[6] = cruncher9.theonecruncher.databank[0].clone();
cruncher9.theonecruncher.databank[6].crunchid = 1;
cruncher9.theonecruncher.databank[7] = cruncher9.theonecruncher.databank[1].clone();
cruncher9.theonecruncher.databank[7].crunchid = 1;
cruncher9.theonecruncher.databank[8] = cruncher9.theonecruncher.databank[2].clone();
cruncher9.theonecruncher.databank[8].crunchid = 1;
cruncher9.theonecruncher.databank[9] = cruncher9.theonecruncher.databank[3].clone();
cruncher9.theonecruncher.databank[9].crunchid = 1;
cruncher9.theonecruncher.databank[10] = cruncher9.theonecruncher.databank[4].clone();
cruncher9.theonecruncher.databank[10].crunchid = 1;
cruncher9.theonecruncher.databank[11] = cruncher9.theonecruncher.databank[5].clone();
cruncher9.theonecruncher.databank[11].crunchid = 1;
// Main block: row 1, card 3
cruncher9.theonecruncher.databank[12] = cruncher9.theonecruncher.databank[0].clone();
cruncher9.theonecruncher.databank[12].crunchid = 2;
cruncher9.theonecruncher.databank[13] = cruncher9.theonecruncher.databank[1].clone();
cruncher9.theonecruncher.databank[13].crunchid = 2;
cruncher9.theonecruncher.databank[14] = cruncher9.theonecruncher.databank[2].clone();
cruncher9.theonecruncher.databank[14].crunchid = 2;
cruncher9.theonecruncher.databank[15] = cruncher9.theonecruncher.databank[3].clone();
cruncher9.theonecruncher.databank[15].crunchid = 2;
cruncher9.theonecruncher.databank[16] = cruncher9.theonecruncher.databank[4].clone();
cruncher9.theonecruncher.databank[16].crunchid = 2;
cruncher9.theonecruncher.databank[17] = cruncher9.theonecruncher.databank[5].clone();
cruncher9.theonecruncher.databank[17].crunchid = 2;
// Main block: row 2, card 1
cruncher9.theonecruncher.databank[18] = cruncher9.theonecruncher.databank[0].clone();
cruncher9.theonecruncher.databank[18].crunchid = 3;
cruncher9.theonecruncher.databank[19] = cruncher9.theonecruncher.databank[1].clone();
cruncher9.theonecruncher.databank[19].crunchid = 3;
cruncher9.theonecruncher.databank[20] = cruncher9.theonecruncher.databank[2].clone();
cruncher9.theonecruncher.databank[20].crunchid = 3;
cruncher9.theonecruncher.databank[21] = cruncher9.theonecruncher.databank[3].clone();
cruncher9.theonecruncher.databank[21].crunchid = 3;
cruncher9.theonecruncher.databank[22] = cruncher9.theonecruncher.databank[4].clone();
cruncher9.theonecruncher.databank[22].crunchid = 3;
cruncher9.theonecruncher.databank[23] = cruncher9.theonecruncher.databank[5].clone();
cruncher9.theonecruncher.databank[23].crunchid = 3;
// Main block: row 2, card 2
cruncher9.theonecruncher.databank[24] = cruncher9.theonecruncher.databank[0].clone();
cruncher9.theonecruncher.databank[24].crunchid = 4;
cruncher9.theonecruncher.databank[25] = cruncher9.theonecruncher.databank[1].clone();
cruncher9.theonecruncher.databank[25].crunchid = 4;
cruncher9.theonecruncher.databank[26] = cruncher9.theonecruncher.databank[2].clone();
cruncher9.theonecruncher.databank[26].crunchid = 4;
cruncher9.theonecruncher.databank[27] = cruncher9.theonecruncher.databank[3].clone();
cruncher9.theonecruncher.databank[27].crunchid = 4;
cruncher9.theonecruncher.databank[28] = cruncher9.theonecruncher.databank[4].clone();
cruncher9.theonecruncher.databank[28].crunchid = 4;
cruncher9.theonecruncher.databank[29] = cruncher9.theonecruncher.databank[5].clone();
cruncher9.theonecruncher.databank[29].crunchid = 4;
// Main block: row 2, card 3
cruncher9.theonecruncher.databank[30] = cruncher9.theonecruncher.databank[0].clone();
cruncher9.theonecruncher.databank[30].crunchid = 5;
cruncher9.theonecruncher.databank[31] = cruncher9.theonecruncher.databank[1].clone();
cruncher9.theonecruncher.databank[31].crunchid = 5;
cruncher9.theonecruncher.databank[32] = cruncher9.theonecruncher.databank[2].clone();
cruncher9.theonecruncher.databank[32].crunchid = 5;
cruncher9.theonecruncher.databank[33] = cruncher9.theonecruncher.databank[3].clone();
cruncher9.theonecruncher.databank[33].crunchid = 5;
cruncher9.theonecruncher.databank[34] = cruncher9.theonecruncher.databank[4].clone();
cruncher9.theonecruncher.databank[34].crunchid = 5;
cruncher9.theonecruncher.databank[35] = cruncher9.theonecruncher.databank[5].clone();
cruncher9.theonecruncher.databank[35].crunchid = 5;
// Main block: row 3, card 1
cruncher9.theonecruncher.databank[36] = cruncher9.theonecruncher.databank[0].clone();
cruncher9.theonecruncher.databank[36].crunchid = 6;
cruncher9.theonecruncher.databank[37] = cruncher9.theonecruncher.databank[1].clone();
cruncher9.theonecruncher.databank[37].crunchid = 6;
cruncher9.theonecruncher.databank[38] = cruncher9.theonecruncher.databank[2].clone();
cruncher9.theonecruncher.databank[38].crunchid = 6;
cruncher9.theonecruncher.databank[39] = cruncher9.theonecruncher.databank[3].clone();
cruncher9.theonecruncher.databank[39].crunchid = 6;
cruncher9.theonecruncher.databank[40] = cruncher9.theonecruncher.databank[4].clone();
cruncher9.theonecruncher.databank[40].crunchid = 6;
cruncher9.theonecruncher.databank[41] = cruncher9.theonecruncher.databank[5].clone();
cruncher9.theonecruncher.databank[41].crunchid = 6;
// Main block: row 3, card 2
cruncher9.theonecruncher.databank[42] = cruncher9.theonecruncher.databank[0].clone();
cruncher9.theonecruncher.databank[42].crunchid = 7;
cruncher9.theonecruncher.databank[43] = cruncher9.theonecruncher.databank[1].clone();
cruncher9.theonecruncher.databank[43].crunchid = 7;
cruncher9.theonecruncher.databank[44] = cruncher9.theonecruncher.databank[2].clone();
cruncher9.theonecruncher.databank[44].crunchid = 7;
cruncher9.theonecruncher.databank[45] = cruncher9.theonecruncher.databank[3].clone();
cruncher9.theonecruncher.databank[45].crunchid = 7;
cruncher9.theonecruncher.databank[46] = cruncher9.theonecruncher.databank[4].clone();
cruncher9.theonecruncher.databank[46].crunchid = 7;
cruncher9.theonecruncher.databank[47] = cruncher9.theonecruncher.databank[5].clone();
cruncher9.theonecruncher.databank[47].crunchid = 7;
// Main block: row 3, card 3
cruncher9.theonecruncher.databank[48] = cruncher9.theonecruncher.databank[0].clone();
cruncher9.theonecruncher.databank[48].crunchid = 8;
cruncher9.theonecruncher.databank[49] = cruncher9.theonecruncher.databank[1].clone();
cruncher9.theonecruncher.databank[49].crunchid = 8;
cruncher9.theonecruncher.databank[50] = cruncher9.theonecruncher.databank[2].clone();
cruncher9.theonecruncher.databank[50].crunchid = 8;
cruncher9.theonecruncher.databank[51] = cruncher9.theonecruncher.databank[3].clone();
cruncher9.theonecruncher.databank[51].crunchid = 8;
cruncher9.theonecruncher.databank[52] = cruncher9.theonecruncher.databank[4].clone();
cruncher9.theonecruncher.databank[52].crunchid = 8;
cruncher9.theonecruncher.databank[53] = cruncher9.theonecruncher.databank[5].clone();
cruncher9.theonecruncher.databank[53].crunchid = 8;

// Small block: row 1, card 1
cruncher9.theonecruncher.databank[54] = new onedata();
cruncher9.theonecruncher.databank[54].mult = 6;
cruncher9.theonecruncher.databank[54].lt = 1;
cruncher9.theonecruncher.databank[54].gte = 0;
cruncher9.theonecruncher.databank[54].crunchid = 9;
cruncher9.theonecruncher.databank[55] = new onedata();
cruncher9.theonecruncher.databank[55].mult = 6;
cruncher9.theonecruncher.databank[55].lt = 2;
cruncher9.theonecruncher.databank[55].gte = 1;
cruncher9.theonecruncher.databank[55].crunchid = 9;
cruncher9.theonecruncher.databank[56] = new onedata();
cruncher9.theonecruncher.databank[56].mult = 6;
cruncher9.theonecruncher.databank[56].lt = 3;
cruncher9.theonecruncher.databank[56].gte = 2;
cruncher9.theonecruncher.databank[56].crunchid = 9;
cruncher9.theonecruncher.databank[57] = new onedata();
cruncher9.theonecruncher.databank[57].mult = 6;
cruncher9.theonecruncher.databank[57].lt = 4;
cruncher9.theonecruncher.databank[57].gte = 3;
cruncher9.theonecruncher.databank[57].crunchid = 9;
cruncher9.theonecruncher.databank[58] = new onedata();
cruncher9.theonecruncher.databank[58].mult = 6;
cruncher9.theonecruncher.databank[58].lt = 5;
cruncher9.theonecruncher.databank[58].gte = 4;
cruncher9.theonecruncher.databank[58].crunchid = 9;
cruncher9.theonecruncher.databank[59] = new onedata();
cruncher9.theonecruncher.databank[59].mult = 6;
cruncher9.theonecruncher.databank[59].lt = 6;
cruncher9.theonecruncher.databank[59].gte = 5;
cruncher9.theonecruncher.databank[59].crunchid = 9;
// Small block: row 1, card 2
cruncher9.theonecruncher.databank[60] = cruncher9.theonecruncher.databank[54].clone();
cruncher9.theonecruncher.databank[60].crunchid = 10;
cruncher9.theonecruncher.databank[61] = cruncher9.theonecruncher.databank[55].clone();
cruncher9.theonecruncher.databank[61].crunchid = 10;
cruncher9.theonecruncher.databank[62] = cruncher9.theonecruncher.databank[56].clone();
cruncher9.theonecruncher.databank[62].crunchid = 10;
cruncher9.theonecruncher.databank[63] = cruncher9.theonecruncher.databank[57].clone();
cruncher9.theonecruncher.databank[63].crunchid = 10;
cruncher9.theonecruncher.databank[64] = cruncher9.theonecruncher.databank[58].clone();
cruncher9.theonecruncher.databank[64].crunchid = 10;
cruncher9.theonecruncher.databank[65] = cruncher9.theonecruncher.databank[59].clone();
cruncher9.theonecruncher.databank[65].crunchid = 10;
// Small block: row 2, card 1
cruncher9.theonecruncher.databank[66] = cruncher9.theonecruncher.databank[54].clone();
cruncher9.theonecruncher.databank[66].crunchid = 11;
cruncher9.theonecruncher.databank[67] = cruncher9.theonecruncher.databank[55].clone();
cruncher9.theonecruncher.databank[67].crunchid = 11;
cruncher9.theonecruncher.databank[68] = cruncher9.theonecruncher.databank[56].clone();
cruncher9.theonecruncher.databank[68].crunchid = 11;
cruncher9.theonecruncher.databank[69] = cruncher9.theonecruncher.databank[57].clone();
cruncher9.theonecruncher.databank[69].crunchid = 11;
cruncher9.theonecruncher.databank[70] = cruncher9.theonecruncher.databank[58].clone();
cruncher9.theonecruncher.databank[70].crunchid = 11;
cruncher9.theonecruncher.databank[71] = cruncher9.theonecruncher.databank[59].clone();
cruncher9.theonecruncher.databank[71].crunchid = 11;
// Small block: row 2, card 2
cruncher9.theonecruncher.databank[72] = cruncher9.theonecruncher.databank[54].clone();
cruncher9.theonecruncher.databank[72].crunchid = 12;
cruncher9.theonecruncher.databank[73] = cruncher9.theonecruncher.databank[55].clone();
cruncher9.theonecruncher.databank[73].crunchid = 12;
cruncher9.theonecruncher.databank[74] = cruncher9.theonecruncher.databank[56].clone();
cruncher9.theonecruncher.databank[74].crunchid = 12;
cruncher9.theonecruncher.databank[75] = cruncher9.theonecruncher.databank[57].clone();
cruncher9.theonecruncher.databank[75].crunchid = 12;
cruncher9.theonecruncher.databank[76] = cruncher9.theonecruncher.databank[58].clone();
cruncher9.theonecruncher.databank[76].crunchid = 12;
cruncher9.theonecruncher.databank[77] = cruncher9.theonecruncher.databank[59].clone();
cruncher9.theonecruncher.databank[77].crunchid = 12;
// Small block: bonus rounds
cruncher9.theonecruncher.databank[78] = new onedata();
cruncher9.theonecruncher.databank[78].crunchid = 13;
cruncher9.theonecruncher.databank[78].mult = 21;
cruncher9.theonecruncher.databank[78].lt = 5;
cruncher9.theonecruncher.databank[78].gte = 4;
// Large block: multipliers
cruncher9.theonecruncher.databank[79] = new onedata();
cruncher9.theonecruncher.databank[79].crunchid = 14;
cruncher9.theonecruncher.databank[79].mult = 9;
cruncher9.theonecruncher.databank[79].lt = 1;
cruncher9.theonecruncher.databank[79].gte = 0;
cruncher9.theonecruncher.databank[80] = new onedata();
cruncher9.theonecruncher.databank[80].crunchid = 15;
cruncher9.theonecruncher.databank[80].mult = 9;
cruncher9.theonecruncher.databank[80].lt = 1;
cruncher9.theonecruncher.databank[80].gte = 0;
cruncher9.theonecruncher.databank[81] = new onedata();
cruncher9.theonecruncher.databank[81].crunchid = 16;
cruncher9.theonecruncher.databank[81].mult = 9;
cruncher9.theonecruncher.databank[81].lt = 1;
cruncher9.theonecruncher.databank[81].gte = 0;
cruncher9.theonecruncher.databank[82] = new onedata();
cruncher9.theonecruncher.databank[82].crunchid = 17;
cruncher9.theonecruncher.databank[82].mult = 9;
cruncher9.theonecruncher.databank[82].lt = 1;
cruncher9.theonecruncher.databank[82].gte = 0;
cruncher9.theonecruncher.databank[83] = new onedata();
cruncher9.theonecruncher.databank[83].crunchid = 18;
cruncher9.theonecruncher.databank[83].mult = 9;
cruncher9.theonecruncher.databank[83].lt = 1;
cruncher9.theonecruncher.databank[83].gte = 0;
cruncher9.theonecruncher.databank[84] = new onedata();
cruncher9.theonecruncher.databank[84].crunchid = 19;
cruncher9.theonecruncher.databank[84].mult = 9;
cruncher9.theonecruncher.databank[84].lt = 1;
cruncher9.theonecruncher.databank[84].gte = 0;
cruncher9.theonecruncher.databank[85] = new onedata();
cruncher9.theonecruncher.databank[85].crunchid = 20;
cruncher9.theonecruncher.databank[85].mult = 9;
cruncher9.theonecruncher.databank[85].lt = 1;
cruncher9.theonecruncher.databank[85].gte = 0;
cruncher9.theonecruncher.databank[86] = new onedata();
cruncher9.theonecruncher.databank[86].crunchid = 21;
cruncher9.theonecruncher.databank[86].mult = 9;
cruncher9.theonecruncher.databank[86].lt = 1;
cruncher9.theonecruncher.databank[86].gte = 0;
cruncher9.theonecruncher.databank[87] = new onedata();
cruncher9.theonecruncher.databank[87].crunchid = 22;
cruncher9.theonecruncher.databank[87].mult = 9;
cruncher9.theonecruncher.databank[87].lt = 1;
cruncher9.theonecruncher.databank[87].gte = 0;

// Payouts:
// calcexp(0.2, 7)*(1/6)
// calcexp(0.4, 7)*(1/6)
// calcexp(0.6, 7)*(1/6)
// calcexp(0.8, 7)*(1/6)
// calcexp(1.0, 7)*(1/6)


// Small block: row 1; Main block: row 1
cruncher9.theonecruncher.paylines[0] = new payline();
cruncher9.theonecruncher.paylines[0].winpercent = 0.0021509393983540535;
cruncher9.theonecruncher.paylines[0].line = '&!78,&54,60,|0,5,)|6,11,)|12,17,)))';
cruncher9.theonecruncher.paylines[1] = new payline();
cruncher9.theonecruncher.paylines[1].winpercent = 0.007827302501796581;
cruncher9.theonecruncher.paylines[1].line = '&!78,&55,61,|1,5,)|7,11,)|13,17,)))';
cruncher9.theonecruncher.paylines[2] = new payline();
cruncher9.theonecruncher.paylines[2].winpercent = 0.02280731454062016;
cruncher9.theonecruncher.paylines[2].line = '&!78,&56,62,|2,5,)|8,11,)|14,17,)))';
cruncher9.theonecruncher.paylines[3] = new payline();
cruncher9.theonecruncher.paylines[3].winpercent = 0.06233980331802198;
cruncher9.theonecruncher.paylines[3].line = '&!78,&57,63,|3,5,)|9,11,)|15,17,)))';
cruncher9.theonecruncher.paylines[4] = new payline();
cruncher9.theonecruncher.paylines[4].winpercent = 0.16666666666666666;
cruncher9.theonecruncher.paylines[4].line = '&!78,&58,64,|4,5,)|10,11,)|16,17,)))';

// Small block: row 1; Main block: row 2
cruncher9.theonecruncher.paylines[5] = new payline();
cruncher9.theonecruncher.paylines[5].winpercent = 0.0021509393983540535;
cruncher9.theonecruncher.paylines[5].line = '&!78,&54,60,|18,23,)|24,29,)|30,35,)))';
cruncher9.theonecruncher.paylines[6] = new payline();
cruncher9.theonecruncher.paylines[6].winpercent = 0.007827302501796581;
cruncher9.theonecruncher.paylines[6].line = '&!78,&55,61,|19,23,)|25,29,)|31,35,)))';
cruncher9.theonecruncher.paylines[7] = new payline();
cruncher9.theonecruncher.paylines[7].winpercent = 0.02280731454062016;
cruncher9.theonecruncher.paylines[7].line = '&!78,&56,62,|20,23,)|26,29,)|32,35,)))';
cruncher9.theonecruncher.paylines[8] = new payline();
cruncher9.theonecruncher.paylines[8].winpercent = 0.06233980331802198;
cruncher9.theonecruncher.paylines[8].line = '&!78,&57,63,|21,23,)|27,29,)|33,35,)))';
cruncher9.theonecruncher.paylines[9] = new payline();
cruncher9.theonecruncher.paylines[9].winpercent = 0.16666666666666666;
cruncher9.theonecruncher.paylines[9].line = '&!78,&58,64,|22,23,)|28,29,)|34,35,)))';

// Small block: row 1; Main block: row 3
cruncher9.theonecruncher.paylines[10] = new payline();
cruncher9.theonecruncher.paylines[10].winpercent = 0.0021509393983540535;
cruncher9.theonecruncher.paylines[10].line = '&!78,&54,60,|36,41,)|42,47,)|48,53,)))';
cruncher9.theonecruncher.paylines[11] = new payline();
cruncher9.theonecruncher.paylines[11].winpercent = 0.007827302501796581;
cruncher9.theonecruncher.paylines[11].line = '&!78,&55,61,|37,41,)|43,47,)|49,53,)))';
cruncher9.theonecruncher.paylines[12] = new payline();
cruncher9.theonecruncher.paylines[12].winpercent = 0.02280731454062016;
cruncher9.theonecruncher.paylines[12].line = '&!78,&56,62,|38,41,)|44,47,)|50,53,)))';
cruncher9.theonecruncher.paylines[13] = new payline();
cruncher9.theonecruncher.paylines[13].winpercent = 0.06233980331802198;
cruncher9.theonecruncher.paylines[13].line = '&!78,&57,63,|39,41,)|45,47,)|51,53,)))';
cruncher9.theonecruncher.paylines[14] = new payline();
cruncher9.theonecruncher.paylines[14].winpercent = 0.16666666666666666;
cruncher9.theonecruncher.paylines[14].line = '&!78,&58,64,|40,41,)|46,47,)|52,53,)))';

// Small block: row 2; Main block: row 1
cruncher9.theonecruncher.paylines[15] = new payline();
cruncher9.theonecruncher.paylines[15].winpercent = 0.0021509393983540535;
cruncher9.theonecruncher.paylines[15].line = '&!78,&66,72,|0,5,)|6,11,)|12,17,)))';
cruncher9.theonecruncher.paylines[16] = new payline();
cruncher9.theonecruncher.paylines[16].winpercent = 0.007827302501796581;
cruncher9.theonecruncher.paylines[16].line = '&!78,&67,73,|1,5,)|7,11,)|13,17,)))';
cruncher9.theonecruncher.paylines[17] = new payline();
cruncher9.theonecruncher.paylines[17].winpercent = 0.02280731454062016;
cruncher9.theonecruncher.paylines[17].line = '&!78,&68,74,|2,5,)|8,11,)|14,17,)))';
cruncher9.theonecruncher.paylines[18] = new payline();
cruncher9.theonecruncher.paylines[18].winpercent = 0.06233980331802198;
cruncher9.theonecruncher.paylines[18].line = '&!78,&69,75,|3,5,)|9,11,)|15,17,)))';
cruncher9.theonecruncher.paylines[19] = new payline();
cruncher9.theonecruncher.paylines[19].winpercent = 0.16666666666666666;
cruncher9.theonecruncher.paylines[19].line = '&!78,&70,76,|4,5,)|10,11,)|16,17,)))';

// Small block: row 2; Main block: row 2
cruncher9.theonecruncher.paylines[20] = new payline();
cruncher9.theonecruncher.paylines[20].winpercent = 0.0021509393983540535;
cruncher9.theonecruncher.paylines[20].line = '&!78,&66,72,|18,23,)|24,29,)|30,35,)))';
cruncher9.theonecruncher.paylines[21] = new payline();
cruncher9.theonecruncher.paylines[21].winpercent = 0.007827302501796581;
cruncher9.theonecruncher.paylines[21].line = '&!78,&67,73,|19,23,)|25,29,)|31,35,)))';
cruncher9.theonecruncher.paylines[22] = new payline();
cruncher9.theonecruncher.paylines[22].winpercent = 0.02280731454062016;
cruncher9.theonecruncher.paylines[22].line = '&!78,&68,74,|20,23,)|26,29,)|32,35,)))';
cruncher9.theonecruncher.paylines[23] = new payline();
cruncher9.theonecruncher.paylines[23].winpercent = 0.06233980331802198;
cruncher9.theonecruncher.paylines[23].line = '&!78,&69,75,|21,23,)|27,29,)|33,35,)))';
cruncher9.theonecruncher.paylines[24] = new payline();
cruncher9.theonecruncher.paylines[24].winpercent = 0.16666666666666666;
cruncher9.theonecruncher.paylines[24].line = '&!78,&70,76,|22,23,)|28,29,)|34,35,)))';

// Small block: row 2; Main block: row 3
cruncher9.theonecruncher.paylines[25] = new payline();
cruncher9.theonecruncher.paylines[25].winpercent = 0.0021509393983540535;
cruncher9.theonecruncher.paylines[25].line = '&!78,&66,72,|36,41,)|42,47,)|48,53,)))';
cruncher9.theonecruncher.paylines[26] = new payline();
cruncher9.theonecruncher.paylines[26].winpercent = 0.007827302501796581;
cruncher9.theonecruncher.paylines[26].line = '&!78,&67,73,|37,41,)|43,47,)|49,53,)))';
cruncher9.theonecruncher.paylines[27] = new payline();
cruncher9.theonecruncher.paylines[27].winpercent = 0.02280731454062016;
cruncher9.theonecruncher.paylines[27].line = '&!78,&68,74,|38,41,)|44,47,)|50,53,)))';
cruncher9.theonecruncher.paylines[28] = new payline();
cruncher9.theonecruncher.paylines[28].winpercent = 0.06233980331802198;
cruncher9.theonecruncher.paylines[28].line = '&!78,&69,75,|39,41,)|45,47,)|51,53,)))';
cruncher9.theonecruncher.paylines[29] = new payline();
cruncher9.theonecruncher.paylines[29].winpercent = 0.16666666666666666;
cruncher9.theonecruncher.paylines[29].line = '&!78,&70,76,|40,41,)|46,47,)|52,53,)))';

// Bonus rounds
cruncher9.theonecruncher.paylines[30] = new payline();
cruncher9.theonecruncher.paylines[30].line = '|78,&77,71,65,59,))';
cruncher9.theonecruncher.paylines[30].winpercent = 0;

// Multipliers
cruncher9.theonecruncher.paylines[31] = new payline();
cruncher9.theonecruncher.paylines[31].winpercent = function(c) {
	var thewin = 0;
	thewin += ((c.paylines[0].win)?(c.paylines[0].winpercent*2):(0));
	thewin += ((c.paylines[1].win)?(c.paylines[1].winpercent*2):(0));
	thewin += ((c.paylines[2].win)?(c.paylines[2].winpercent*2):(0));
	thewin += ((c.paylines[3].win)?(c.paylines[3].winpercent*2):(0));
	thewin += ((c.paylines[4].win)?(c.paylines[4].winpercent*2):(0));
	thewin += ((c.paylines[15].win)?(c.paylines[15].winpercent*2):(0));
	thewin += ((c.paylines[16].win)?(c.paylines[16].winpercent*2):(0));
	thewin += ((c.paylines[17].win)?(c.paylines[17].winpercent*2):(0));
	thewin += ((c.paylines[18].win)?(c.paylines[18].winpercent*2):(0));
	thewin += ((c.paylines[19].win)?(c.paylines[19].winpercent*2):(0));
	return thewin;
};
cruncher9.theonecruncher.paylines[31].line = '&79,)';
cruncher9.theonecruncher.paylines[32] = new payline();
cruncher9.theonecruncher.paylines[32].winpercent = function(c) {
	var thewin = 0;
	thewin += ((c.paylines[0].win)?(c.paylines[0].winpercent*2):(0));
	thewin += ((c.paylines[1].win)?(c.paylines[1].winpercent*2):(0));
	thewin += ((c.paylines[2].win)?(c.paylines[2].winpercent*2):(0));
	thewin += ((c.paylines[3].win)?(c.paylines[3].winpercent*2):(0));
	thewin += ((c.paylines[4].win)?(c.paylines[4].winpercent*2):(0));
	thewin += ((c.paylines[15].win)?(c.paylines[15].winpercent*2):(0));
	thewin += ((c.paylines[16].win)?(c.paylines[16].winpercent*2):(0));
	thewin += ((c.paylines[17].win)?(c.paylines[17].winpercent*2):(0));
	thewin += ((c.paylines[18].win)?(c.paylines[18].winpercent*2):(0));
	thewin += ((c.paylines[19].win)?(c.paylines[19].winpercent*2):(0));
	return thewin;
};
cruncher9.theonecruncher.paylines[32].line = '&80,)';
cruncher9.theonecruncher.paylines[33] = new payline();
cruncher9.theonecruncher.paylines[33].winpercent = function(c) {
	var thewin = 0;
	thewin += ((c.paylines[0].win)?(c.paylines[0].winpercent*2):(0));
	thewin += ((c.paylines[1].win)?(c.paylines[1].winpercent*2):(0));
	thewin += ((c.paylines[2].win)?(c.paylines[2].winpercent*2):(0));
	thewin += ((c.paylines[3].win)?(c.paylines[3].winpercent*2):(0));
	thewin += ((c.paylines[4].win)?(c.paylines[4].winpercent*2):(0));
	thewin += ((c.paylines[15].win)?(c.paylines[15].winpercent*2):(0));
	thewin += ((c.paylines[16].win)?(c.paylines[16].winpercent*2):(0));
	thewin += ((c.paylines[17].win)?(c.paylines[17].winpercent*2):(0));
	thewin += ((c.paylines[18].win)?(c.paylines[18].winpercent*2):(0));
	thewin += ((c.paylines[19].win)?(c.paylines[19].winpercent*2):(0));
	return thewin;
};
cruncher9.theonecruncher.paylines[33].line = '&81,)';
cruncher9.theonecruncher.paylines[34] = new payline();
cruncher9.theonecruncher.paylines[34].winpercent = function(c) {
	var thewin = 0;
	thewin += ((c.paylines[5].win)?(c.paylines[5].winpercent*2):(0));
	thewin += ((c.paylines[6].win)?(c.paylines[6].winpercent*2):(0));
	thewin += ((c.paylines[7].win)?(c.paylines[7].winpercent*2):(0));
	thewin += ((c.paylines[8].win)?(c.paylines[8].winpercent*2):(0));
	thewin += ((c.paylines[9].win)?(c.paylines[9].winpercent*2):(0));
	thewin += ((c.paylines[20].win)?(c.paylines[20].winpercent*2):(0));
	thewin += ((c.paylines[21].win)?(c.paylines[21].winpercent*2):(0));
	thewin += ((c.paylines[22].win)?(c.paylines[22].winpercent*2):(0));
	thewin += ((c.paylines[23].win)?(c.paylines[23].winpercent*2):(0));
	thewin += ((c.paylines[24].win)?(c.paylines[24].winpercent*2):(0));
	return thewin;
};
cruncher9.theonecruncher.paylines[34].line = '&82,)';
cruncher9.theonecruncher.paylines[35] = new payline();
cruncher9.theonecruncher.paylines[35].winpercent = function(c) {
	var thewin = 0;
	thewin += ((c.paylines[5].win)?(c.paylines[5].winpercent*2):(0));
	thewin += ((c.paylines[6].win)?(c.paylines[6].winpercent*2):(0));
	thewin += ((c.paylines[7].win)?(c.paylines[7].winpercent*2):(0));
	thewin += ((c.paylines[8].win)?(c.paylines[8].winpercent*2):(0));
	thewin += ((c.paylines[9].win)?(c.paylines[9].winpercent*2):(0));
	thewin += ((c.paylines[20].win)?(c.paylines[20].winpercent*2):(0));
	thewin += ((c.paylines[21].win)?(c.paylines[21].winpercent*2):(0));
	thewin += ((c.paylines[22].win)?(c.paylines[22].winpercent*2):(0));
	thewin += ((c.paylines[23].win)?(c.paylines[23].winpercent*2):(0));
	thewin += ((c.paylines[24].win)?(c.paylines[24].winpercent*2):(0));
	return thewin;
};
cruncher9.theonecruncher.paylines[35].line = '&83,)';
cruncher9.theonecruncher.paylines[36] = new payline();
cruncher9.theonecruncher.paylines[36].winpercent = function(c) {
	var thewin = 0;
	thewin += ((c.paylines[5].win)?(c.paylines[5].winpercent*2):(0));
	thewin += ((c.paylines[6].win)?(c.paylines[6].winpercent*2):(0));
	thewin += ((c.paylines[7].win)?(c.paylines[7].winpercent*2):(0));
	thewin += ((c.paylines[8].win)?(c.paylines[8].winpercent*2):(0));
	thewin += ((c.paylines[9].win)?(c.paylines[9].winpercent*2):(0));
	thewin += ((c.paylines[20].win)?(c.paylines[20].winpercent*2):(0));
	thewin += ((c.paylines[21].win)?(c.paylines[21].winpercent*2):(0));
	thewin += ((c.paylines[22].win)?(c.paylines[22].winpercent*2):(0));
	thewin += ((c.paylines[23].win)?(c.paylines[23].winpercent*2):(0));
	thewin += ((c.paylines[24].win)?(c.paylines[24].winpercent*2):(0));
	return thewin;
};
cruncher9.theonecruncher.paylines[36].line = '&84,)';
cruncher9.theonecruncher.paylines[37] = new payline();
cruncher9.theonecruncher.paylines[37].winpercent = function(c) {
	var thewin = 0;
	thewin += ((c.paylines[10].win)?(c.paylines[10].winpercent*2):(0));
	thewin += ((c.paylines[11].win)?(c.paylines[11].winpercent*2):(0));
	thewin += ((c.paylines[12].win)?(c.paylines[12].winpercent*2):(0));
	thewin += ((c.paylines[13].win)?(c.paylines[13].winpercent*2):(0));
	thewin += ((c.paylines[14].win)?(c.paylines[14].winpercent*2):(0));
	thewin += ((c.paylines[25].win)?(c.paylines[25].winpercent*2):(0));
	thewin += ((c.paylines[26].win)?(c.paylines[26].winpercent*2):(0));
	thewin += ((c.paylines[27].win)?(c.paylines[27].winpercent*2):(0));
	thewin += ((c.paylines[28].win)?(c.paylines[28].winpercent*2):(0));
	thewin += ((c.paylines[29].win)?(c.paylines[29].winpercent*2):(0));
	return thewin;
};
cruncher9.theonecruncher.paylines[37].line = '&85,)';
cruncher9.theonecruncher.paylines[38] = new payline();
cruncher9.theonecruncher.paylines[38].winpercent = function(c) {
	var thewin = 0;
	thewin += ((c.paylines[10].win)?(c.paylines[10].winpercent*2):(0));
	thewin += ((c.paylines[11].win)?(c.paylines[11].winpercent*2):(0));
	thewin += ((c.paylines[12].win)?(c.paylines[12].winpercent*2):(0));
	thewin += ((c.paylines[13].win)?(c.paylines[13].winpercent*2):(0));
	thewin += ((c.paylines[14].win)?(c.paylines[14].winpercent*2):(0));
	thewin += ((c.paylines[25].win)?(c.paylines[25].winpercent*2):(0));
	thewin += ((c.paylines[26].win)?(c.paylines[26].winpercent*2):(0));
	thewin += ((c.paylines[27].win)?(c.paylines[27].winpercent*2):(0));
	thewin += ((c.paylines[28].win)?(c.paylines[28].winpercent*2):(0));
	thewin += ((c.paylines[29].win)?(c.paylines[29].winpercent*2):(0));
	return thewin;
};
cruncher9.theonecruncher.paylines[38].line = '&86,)';
cruncher9.theonecruncher.paylines[39] = new payline();
cruncher9.theonecruncher.paylines[39].winpercent = function(c) {
	var thewin = 0;
	thewin += ((c.paylines[10].win)?(c.paylines[10].winpercent*2):(0));
	thewin += ((c.paylines[11].win)?(c.paylines[11].winpercent*2):(0));
	thewin += ((c.paylines[12].win)?(c.paylines[12].winpercent*2):(0));
	thewin += ((c.paylines[13].win)?(c.paylines[13].winpercent*2):(0));
	thewin += ((c.paylines[14].win)?(c.paylines[14].winpercent*2):(0));
	thewin += ((c.paylines[25].win)?(c.paylines[25].winpercent*2):(0));
	thewin += ((c.paylines[26].win)?(c.paylines[26].winpercent*2):(0));
	thewin += ((c.paylines[27].win)?(c.paylines[27].winpercent*2):(0));
	thewin += ((c.paylines[28].win)?(c.paylines[28].winpercent*2):(0));
	thewin += ((c.paylines[29].win)?(c.paylines[29].winpercent*2):(0));
	return thewin;
};
cruncher9.theonecruncher.paylines[39].line = '&87,)';

cruncher9.theonecruncher.bonuses[0] = new bonus();
cruncher9.theonecruncher.bonuses[0].criteria = function(cruncher) {
	if(cruncher.paylines[30].win) return true;
}
cruncher9.theonecruncher.bonuses[0].execute = function(cruncher) {
	cruncher.bonusround += 12;
	cruncher.parentmachine.deduct = false;
	cruncher.parentmachine.onendstack = function() {
		this.deduct = true;
	}
	for(var i=0; i<12; i++) {
		cruncher.parentmachine.play();
		cruncher.bonusround --;
	}
}

var t = '';
t+='<style type="text/css">';
t+='#cruncher9 {';
t+='cursor:pointer;';
t+='}';
t+='#cruncher9 table {';
t+='border-collapse:true;';
t+='}';
t+='#cruncher9 td {';
t+='width:100px;';
t+='height:100px;';
t+='border:1px solid #000;';
t+='font-size:22px;';
t+='font-family:Courier New;';
t+='background-color:white;';
t+='text-align:center;';
t+='}';
t+='#smalltable, #maintable {';
t+='display:inline-block;';
t+='margin-right:10px;';
t+='}';
t+='</style>';
t+='<div id="cruncher9" onmouseup="cruncher9.play()">';
t+='<div id="smalltable"><table>';
t+='<tr><td id="cruncher9.handle0"></td><td id="cruncher9.handle1"></td></tr>';
t+='<tr><td id="cruncher9.handle2"></td><td id="cruncher9.handle3"></td></tr>';
t+='</table></div>';
t+='<div id="maintable"><table>';
t+='<tr><td id="cruncher9.handle4"></td><td id="cruncher9.handle5"></td><td id="cruncher9.handle6"></td></tr>';
t+='<tr><td id="cruncher9.handle7"></td><td id="cruncher9.handle8"></td><td id="cruncher9.handle9"></td></tr>';
t+='<tr><td id="cruncher9.handle10"></td><td id="cruncher9.handle11"></td><td id="cruncher9.handle12"></td></tr>';
t+='</table></div>';
t+='</div>';

cruncher9.pagesrc = t;

cruncher9.animations[0] = new animation(cruncher9);
cruncher9.animations[1] = new animation(cruncher9);
cruncher9.animations[1].finishmandatory = false;
cruncher9.animations[1].autoplay = false;
cruncher9.animations[0].delay = cruncher9.animations[1].delay = 250;

// Main animation
cruncher9.animations[0].frame[0] = function(a, c) {
	c.handles[0].style.color = c.handles[1].style.color = c.handles[2].style.color = c.handles[3].style.color = c.handles[4].style.color = c.handles[5].style.color = c.handles[6].style.color = c.handles[7].style.color = c.handles[8].style.color = c.handles[9].style.color = c.handles[10].style.color = c.handles[11].style.color = c.handles[12].style.color = 'black';
	
	c.handles[0].innerHTML = c.handles[2].innerHTML;
	c.handles[1].innerHTML = c.handles[3].innerHTML;
	if(c.theonecruncher.paylines[30].win) {
		c.handles[2].innerHTML = '5';
		c.handles[3].innerHTML = '5';
	} else {
		c.handles[2].innerHTML = Math.floor(c.theonecruncher.databank[54].crunched * c.theonecruncher.databank[54].mult);
		c.handles[3].innerHTML = Math.floor(c.theonecruncher.databank[60].crunched * c.theonecruncher.databank[60].mult);
	}
	c.handles[4].innerHTML = c.handles[7].innerHTML;
	c.handles[5].innerHTML = c.handles[8].innerHTML;
	c.handles[6].innerHTML = c.handles[9].innerHTML;
	c.handles[7].innerHTML = c.handles[10].innerHTML;
	c.handles[8].innerHTML = c.handles[11].innerHTML;
	c.handles[9].innerHTML = c.handles[12].innerHTML;
	c.handles[10].innerHTML = Math.floor(c.theonecruncher.databank[0].crunched * c.theonecruncher.databank[0].mult);
	if(c.theonecruncher.databank[79].win) {
		c.handles[10].innerHTML = '<b>'+c.handles[10].innerHTML+'</b>';
	}
	c.handles[11].innerHTML = Math.floor(c.theonecruncher.databank[6].crunched * c.theonecruncher.databank[6].mult);
	if(c.theonecruncher.databank[80].win) {
		c.handles[11].innerHTML = '<b>'+c.handles[11].innerHTML+'</b>';
	}
	c.handles[12].innerHTML = Math.floor(c.theonecruncher.databank[12].crunched * c.theonecruncher.databank[12].mult);
	if(c.theonecruncher.databank[81].win) {
		c.handles[12].innerHTML = '<b>'+c.handles[12].innerHTML+'</b>';
	}
}
cruncher9.animations[0].frame[1] = function(a, c) {
	c.handles[0].innerHTML = c.handles[2].innerHTML;
	c.handles[1].innerHTML = c.handles[3].innerHTML;
	if(c.theonecruncher.paylines[30].win) {
		c.handles[2].innerHTML = '5';
		c.handles[3].innerHTML = '5';
	} else {
		c.handles[2].innerHTML = Math.floor(c.theonecruncher.databank[66].crunched * c.theonecruncher.databank[66].mult);
		c.handles[3].innerHTML = Math.floor(c.theonecruncher.databank[72].crunched * c.theonecruncher.databank[72].mult);
	}
	c.handles[4].innerHTML = c.handles[7].innerHTML;
	c.handles[5].innerHTML = c.handles[8].innerHTML;
	c.handles[6].innerHTML = c.handles[9].innerHTML;
	c.handles[7].innerHTML = c.handles[10].innerHTML;
	c.handles[8].innerHTML = c.handles[11].innerHTML;
	c.handles[9].innerHTML = c.handles[12].innerHTML;
	c.handles[10].innerHTML = Math.floor(c.theonecruncher.databank[18].crunched * c.theonecruncher.databank[18].mult);
	if(c.theonecruncher.databank[82].win) {
		c.handles[10].innerHTML = '<b>'+c.handles[10].innerHTML+'</b>';
	}
	c.handles[11].innerHTML = Math.floor(c.theonecruncher.databank[24].crunched * c.theonecruncher.databank[24].mult);
	if(c.theonecruncher.databank[83].win) {
		c.handles[11].innerHTML = '<b>'+c.handles[11].innerHTML+'</b>';
	}
	c.handles[12].innerHTML = Math.floor(c.theonecruncher.databank[30].crunched * c.theonecruncher.databank[30].mult);
	if(c.theonecruncher.databank[84].win) {
		c.handles[12].innerHTML = '<b>'+c.handles[12].innerHTML+'</b>';
	}
}
cruncher9.animations[0].frame[2] = function(a, c) {
	c.handles[4].innerHTML = c.handles[7].innerHTML;
	c.handles[5].innerHTML = c.handles[8].innerHTML;
	c.handles[6].innerHTML = c.handles[9].innerHTML;
	c.handles[7].innerHTML = c.handles[10].innerHTML;
	c.handles[8].innerHTML = c.handles[11].innerHTML;
	c.handles[9].innerHTML = c.handles[12].innerHTML;
	c.handles[10].innerHTML = Math.floor(c.theonecruncher.databank[36].crunched * c.theonecruncher.databank[36].mult);
	if(c.theonecruncher.databank[85].win) {
		c.handles[10].innerHTML = '<b>'+c.handles[10].innerHTML+'</b>';
	}
	c.handles[11].innerHTML = Math.floor(c.theonecruncher.databank[42].crunched * c.theonecruncher.databank[42].mult);
	if(c.theonecruncher.databank[86].win) {
		c.handles[11].innerHTML = '<b>'+c.handles[11].innerHTML+'</b>';
	}
	c.handles[12].innerHTML = Math.floor(c.theonecruncher.databank[48].crunched * c.theonecruncher.databank[48].mult);
	if(c.theonecruncher.databank[87].win) {
		c.handles[12].innerHTML = '<b>'+c.handles[12].innerHTML+'</b>';
	}
	
	c.animations[1].play();
}

// Win animation
cruncher9.animations[1].frame[0] = function(a, c) {
	if(c.theonecruncher.paylines[0].win || c.theonecruncher.paylines[1].win || c.theonecruncher.paylines[2].win || c.theonecruncher.paylines[3].win || c.theonecruncher.paylines[4].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[4].style.color = c.handles[5].style.color = c.handles[6].style.color = 'red';
	}
	if(c.theonecruncher.paylines[5].win || c.theonecruncher.paylines[6].win || c.theonecruncher.paylines[7].win || c.theonecruncher.paylines[8].win || c.theonecruncher.paylines[9].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[7].style.color = c.handles[8].style.color = c.handles[9].style.color = 'red';
	}
	if(c.theonecruncher.paylines[10].win || c.theonecruncher.paylines[11].win || c.theonecruncher.paylines[12].win || c.theonecruncher.paylines[13].win || c.theonecruncher.paylines[14].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[10].style.color = c.handles[11].style.color = c.handles[12].style.color = 'red';
	}
	if(c.theonecruncher.paylines[15].win || c.theonecruncher.paylines[16].win || c.theonecruncher.paylines[17].win || c.theonecruncher.paylines[18].win || c.theonecruncher.paylines[19].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[4].style.color = c.handles[5].style.color = c.handles[6].style.color = 'red';
	}
	if(c.theonecruncher.paylines[20].win || c.theonecruncher.paylines[21].win || c.theonecruncher.paylines[22].win || c.theonecruncher.paylines[23].win || c.theonecruncher.paylines[24].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[7].style.color = c.handles[8].style.color = c.handles[9].style.color = 'red';
	}
	if(c.theonecruncher.paylines[25].win || c.theonecruncher.paylines[26].win || c.theonecruncher.paylines[27].win || c.theonecruncher.paylines[28].win || c.theonecruncher.paylines[29].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[10].style.color = c.handles[11].style.color = c.handles[12].style.color = 'red';
	}
}
cruncher9.animations[1].frame[1] = function(a, c) {
	if(c.theonecruncher.paylines[0].win || c.theonecruncher.paylines[1].win || c.theonecruncher.paylines[2].win || c.theonecruncher.paylines[3].win || c.theonecruncher.paylines[4].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[4].style.color = c.handles[5].style.color = c.handles[6].style.color = 'green';
	}
	if(c.theonecruncher.paylines[5].win || c.theonecruncher.paylines[6].win || c.theonecruncher.paylines[7].win || c.theonecruncher.paylines[8].win || c.theonecruncher.paylines[9].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[7].style.color = c.handles[8].style.color = c.handles[9].style.color = 'green';
	}
	if(c.theonecruncher.paylines[10].win || c.theonecruncher.paylines[11].win || c.theonecruncher.paylines[12].win || c.theonecruncher.paylines[13].win || c.theonecruncher.paylines[14].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[10].style.color = c.handles[11].style.color = c.handles[12].style.color = 'green';
	}
	if(c.theonecruncher.paylines[15].win || c.theonecruncher.paylines[16].win || c.theonecruncher.paylines[17].win || c.theonecruncher.paylines[18].win || c.theonecruncher.paylines[19].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[4].style.color = c.handles[5].style.color = c.handles[6].style.color = 'green';
	}
	if(c.theonecruncher.paylines[20].win || c.theonecruncher.paylines[21].win || c.theonecruncher.paylines[22].win || c.theonecruncher.paylines[23].win || c.theonecruncher.paylines[24].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[7].style.color = c.handles[8].style.color = c.handles[9].style.color = 'green';
	}
	if(c.theonecruncher.paylines[25].win || c.theonecruncher.paylines[26].win || c.theonecruncher.paylines[27].win || c.theonecruncher.paylines[28].win || c.theonecruncher.paylines[29].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[10].style.color = c.handles[11].style.color = c.handles[12].style.color = 'green';
	}
}
cruncher9.animations[1].frame[2] = function(a, c) {
	if(c.theonecruncher.paylines[0].win || c.theonecruncher.paylines[1].win || c.theonecruncher.paylines[2].win || c.theonecruncher.paylines[3].win || c.theonecruncher.paylines[4].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[4].style.color = c.handles[5].style.color = c.handles[6].style.color = 'blue';
	}
	if(c.theonecruncher.paylines[5].win || c.theonecruncher.paylines[6].win || c.theonecruncher.paylines[7].win || c.theonecruncher.paylines[8].win || c.theonecruncher.paylines[9].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[7].style.color = c.handles[8].style.color = c.handles[9].style.color = 'blue';
	}
	if(c.theonecruncher.paylines[10].win || c.theonecruncher.paylines[11].win || c.theonecruncher.paylines[12].win || c.theonecruncher.paylines[13].win || c.theonecruncher.paylines[14].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[10].style.color = c.handles[11].style.color = c.handles[12].style.color = 'blue';
	}
	if(c.theonecruncher.paylines[15].win || c.theonecruncher.paylines[16].win || c.theonecruncher.paylines[17].win || c.theonecruncher.paylines[18].win || c.theonecruncher.paylines[19].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[4].style.color = c.handles[5].style.color = c.handles[6].style.color = 'blue';
	}
	if(c.theonecruncher.paylines[20].win || c.theonecruncher.paylines[21].win || c.theonecruncher.paylines[22].win || c.theonecruncher.paylines[23].win || c.theonecruncher.paylines[24].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[7].style.color = c.handles[8].style.color = c.handles[9].style.color = 'blue';
	}
	if(c.theonecruncher.paylines[25].win || c.theonecruncher.paylines[26].win || c.theonecruncher.paylines[27].win || c.theonecruncher.paylines[28].win || c.theonecruncher.paylines[29].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[10].style.color = c.handles[11].style.color = c.handles[12].style.color = 'blue';
	}
}
cruncher9.animations[1].frame[3] = function(a, c) {
	if(c.theonecruncher.paylines[0].win || c.theonecruncher.paylines[1].win || c.theonecruncher.paylines[2].win || c.theonecruncher.paylines[3].win || c.theonecruncher.paylines[4].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[4].style.color = c.handles[5].style.color = c.handles[6].style.color = 'red';
	}
	if(c.theonecruncher.paylines[5].win || c.theonecruncher.paylines[6].win || c.theonecruncher.paylines[7].win || c.theonecruncher.paylines[8].win || c.theonecruncher.paylines[9].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[7].style.color = c.handles[8].style.color = c.handles[9].style.color = 'red';
	}
	if(c.theonecruncher.paylines[10].win || c.theonecruncher.paylines[11].win || c.theonecruncher.paylines[12].win || c.theonecruncher.paylines[13].win || c.theonecruncher.paylines[14].win) {
		c.handles[0].style.color = c.handles[1].style.color = c.handles[10].style.color = c.handles[11].style.color = c.handles[12].style.color = 'red';
	}
	if(c.theonecruncher.paylines[15].win || c.theonecruncher.paylines[16].win || c.theonecruncher.paylines[17].win || c.theonecruncher.paylines[18].win || c.theonecruncher.paylines[19].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[4].style.color = c.handles[5].style.color = c.handles[6].style.color = 'red';
	}
	if(c.theonecruncher.paylines[20].win || c.theonecruncher.paylines[21].win || c.theonecruncher.paylines[22].win || c.theonecruncher.paylines[23].win || c.theonecruncher.paylines[24].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[7].style.color = c.handles[8].style.color = c.handles[9].style.color = 'red';
	}
	if(c.theonecruncher.paylines[25].win || c.theonecruncher.paylines[26].win || c.theonecruncher.paylines[27].win || c.theonecruncher.paylines[28].win || c.theonecruncher.paylines[29].win) {
		c.handles[2].style.color = c.handles[3].style.color = c.handles[10].style.color = c.handles[11].style.color = c.handles[12].style.color = 'red';
	}
}

const CRUNCHER9_LUCK_REVOLVE = 1000*60*9;

cruncher9.theonecruncher.determineluck = function() {
	this.lucky.lt = .25+(randreal()*.5);
	setTimeout('globalmachines['+this.parentmachine.id+'].theonecruncher.determineluck()', CRUNCHER9_LUCK_REVOLVE);
}

cruncher9.theonecruncher.lucky.modid = 2;
cruncher9.theonecruncher.lucky.scaley = 3;
cruncher9.theonecruncher.lucky.lt = 0;
cruncher9.theonecruncher.lucky.gte = 0;
cruncher9.theonecruncher.lucky.mult = 1;

cruncher9.theonecruncher.determineluck();
