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

const GLOBAL_DELAY = 20;
const DEFAULT_BANK_LENGTH = 3;

function calclog(x, scaley) {
	var thenegative = 1;
	if(x<0) {
		x = -1 * x;
		thenegative = -1;
	}
	x = (x * (Math.pow(Math.E, scaley) - 1)) + 1;
	var y = (Math.log(x) / scaley);
	return thenegative * y;
}
function calcexp(x, scaley) {
	var thenegative = 1;
	if(x<0) {
		x = -1 * x;
		thenegative = -1;
	}
	var y = ((Math.pow(2, x*scaley) - 1) / (Math.pow(2, scaley)-1));
	return thenegative * y;
}

var animation = function(theao) {
	this.id = globalanimations.length;
	this.attachedobject = theao;
	this.frame = []; 	// Each animation frame is a function which changes
						// the style values of one of the handles
	this.curi = 0; 		// This is the current animation frame
	this.consts = []; 	// All the applicable constants except delay
	this.delay = GLOBAL_DELAY;
	this.autoplay = true;			// Will this play during machine play?
	this.finishmandatory = true;	// Is finishing the animation mandatory?
	this.finished = true;
	this.play = function() {
		this.frame[this.curi](this, this.attachedobject);
		this.curi++;
		if(this.curi < this.frame.length) {
			this.finished = false;
			setTimeout(('globalanimations['+this.id+'].play()'), this.delay);
		} else {
			this.curi = 0;
			this.finished = true;
			if(this.finishmandatory) this.attachedobject.endplay();
		}
	}
	globalanimations[this.id] = this;
}
var globalanimations = [];
var onedata = function() {
	this.crunched = 0;		// final 1-crunched random data
	this.win = false;		// if won, turns true
	this.crunchid = 0;		// 1-crunch connection
	this.modid = -1;		// -1 for flat, 1 for exp., 2 for log.
	this.scaley = 1;		// Scale y on exp or log
	this.mult = 3;			// Multiplication of 1-crunch
	this.mod = 0;			// Modulus. If zero, not used.
	this.lt = 1;			// Win if less than
	this.gte = 0;			// Win if greater than or equal to
	this.clone = function() {
		var r = new onedata();
		r.crunched = this.crunched;
		r.win = this.win;
		r.crunchid = this.crunchid;
		r.modid = this.modid;
		r.scaley = this.scaley;
		r.mult = this.mult;
		r.mod = this.mod;
		r.lt = this.lt;
		r.gte = this.gte;
		return r;
	}
}
var payline = function() {
	this.win = false;
	this.line = '';			// lisp of databank ids. Accepts & (and) and | 
							// (or) as functions. E.g. &1,2,3,|4,5))
	this.winpercent = 1;	// All wins in line var means this percentage of one win
}
var bonus = function() {
	this.criteria = false;
	this.execute = false;
}
var onecruncher = function(crunchbanklength) {
	this.parentmachine = false;
	this.luckyc = 0;
	this.luckycc = 0;
	this.lucky = new onedata();
	this.crunchbank = [];	// Bank of 1-crunches
	this.databank = []; 	// Bank of handler info for 1-crunches
	this.paylines = [];		// Array of paylines
	this.bonuses = [];
	this.bonusround = 0;
	this.win = 0;
	this.determineluck = false // User defined function for determining luckiness
	this.lispprocess = function(lisp) {
		var curi = 0;
		var thearr = [];
		thearr[0] = '';
		var curpar = 0;
		var not = false;
		for(var i = 1; i<lisp.length; i++) {
			if(curpar > 0) {
				if(lisp.charAt(i) != ')') {
					continue;
				} else {
					curpar--;
					continue;
				}
			}
			if(lisp.charAt(i) == ')') {
				if(lisp.charAt(0) == '|') {
					for(var d in thearr) {
						if(thearr[d]) {
							return true;
						}
					}
					return false;
				} else if(lisp.charAt(0) == '&') {
					for(var d in thearr) {
						if(!thearr[d]) {
							return false;
						}
					}
					return true;
				}
			}
			if(lisp.charAt(i) == '!') {
				not = true;
				continue;
			}
			if((lisp.charAt(i) == '&') || (lisp.charAt(i) == '|')) {
				thearr[curi] = ((not)?(!this.lispprocess(lisp.substring(i, lisp.length))):(this.lispprocess(lisp.substring(i, lisp.length))));
				not = false;
				curi++;
				curpar++;
				continue;
			}
			if(lisp.charAt(i) == ',') {
				thearr[curi] = ((not)?(!this.databank[parseFloat(thearr[curi])].win):(this.databank[parseFloat(thearr[curi])].win));
				curi++;
				not = false;
				continue;
			}
			if(!thearr[curi]) thearr[curi] = '';
			thearr[curi] += lisp.charAt(i);
		}
	}
	this.crunchme = function() {
		this.win = 0;
		this.luckycc = randreal();
		for(var i in this.crunchbank) {
			this.luckyc = randreal();
			if(this.lucky.modid > -1) {
				if(this.lucky.modid == 1) {
					this.lucky.crunched = calcexp(this.luckyc, this.lucky.scaley);
				} else if(this.lucky.modid == 2) {
					this.lucky.crunched = calclog(this.luckyc, this.lucky.scaley);
				}
			} else {
				this.lucky.crunched = this.luckyc;
			}
			var cruncher = this.lucky.crunched * this.lucky.mult;
			this.lucky.win = (((cruncher >= this.lucky.gte) && (cruncher < this.lucky.lt))?(true):(false));
			this.crunchbank[i] = ((this.lucky.win)?(this.luckycc):(randreal()));
		}
		for(var i in this.databank) {
			if(this.databank[i].modid > -1) {
				if(this.databank[i].modid == 1) {
					this.databank[i].crunched = calcexp(this.crunchbank[this.databank[i].crunchid], this.databank[i].scaley);
				} else if(this.databank[i].modid == 2) {
					this.databank[i].crunched = calclog(this.crunchbank[this.databank[i].crunchid], this.databank[i].scaley);
				}
			} else {
				this.databank[i].crunched = this.crunchbank[this.databank[i].crunchid];
			}
			var cruncher = 0;
			if(this.databank[i].mod > 0) {
				cruncher = (this.databank[i].crunched * this.databank[i].mult) % this.databank[i].mod;
			} else {
				cruncher = this.databank[i].crunched * this.databank[i].mult;
			}
			this.databank[i].win = (((cruncher >= this.databank[i].gte) && (cruncher < this.databank[i].lt))?(true):(false));
		}
		for(var i in this.paylines) {
			var thiswin = this.lispprocess(this.paylines[i].line);
			if(thiswin) {
				this.paylines[i].win = true;
				this.win += ((typeof this.paylines[i].winpercent === 'function')?(this.paylines[i].winpercent(this)):(this.paylines[i].winpercent));
			} else {
				this.paylines[i].win = false;
			}
		}
		for(var i in this.bonuses) {
			if(this.bonuses[i].criteria(this)) this.bonuses[i].execute(this);
		}
		if(this.win > 1) this.win = 1;
		return this.win;
	}
	for(var i = 0; i<crunchbanklength; i++) {
		this.crunchbank[i] = 0;
	}
}
var machine = function() {
	this.id = globalmachines.length;
	this.pagesrc = '';
	this.name = '';
	this.animations = [];
	this.handles = []; 	// All the handles, pointing to elements on the page
	this.theonecruncher = false;
	this.animate = true;
	this.deduct = true;
	this.attachedaccount = false;
	this.callstack = 0;	// How many including now are playing
	this.onendstack = false;
	this.onendplay = false;
	this.endplay = function() {
		var finished = true;
		for(var i in this.animations) {
			if(!this.animations[i].finishmandatory) continue;
			if(!this.animations[i].finished) {
				finished = false;
				break;
			}
		}
		if(finished) {
			this.callstack--;
			if(this.onendplay) this.onendplay();
			if(this.callstack > 0) {
				this.play(true);
			} else {
				if(this.onendstack) this.onendstack();
			}
		}
	}
	this.play = function(cont) {
		if(this.animate && !cont) {
			this.callstack++;
			if(this.callstack > 1) return;
		}
		this.theonecruncher.crunchme();
		if(this.animate) {
			for(var i in this.animations) {
				if(this.animations[i].autoplay) this.animations[i].play();
			}
		}
		if(this.deduct) {
			this.attachedaccount.deduct();
		} else {
			this.attachedaccount.deduct(0);
		}
		this.attachedaccount.winadd(this.theonecruncher.win);
	}
	this.init = function(thehandle) {
		this.handle = thehandle;
		this.handle.innerHTML = this.pagesrc;
		var d = 0;
		while(document.getElementById(this.name+'.handle'+d)) {
			this.handles[d] = document.getElementById(this.name+'.handle'+d);
			d++;
		}
		for(var i in this.animations) {
			if(this.animations[i].finishmandatory && this.animations[i].autoplay) this.animationtime = ((this.animations[i].frame.length*this.animations[i].delay > this.animationtime)?(this.animations[i].frame.length*this.animations[i].delay):(this.animationtime));
		}
	}
	globalmachines[this.id] = this;
}
var globalmachines = [];
var account = function() {
	this.deductamount = 0;
	this.playbalance = 0;
	this.winbalance = 0;
	this.deducthandle = false;
	this.playhandle = false;
	this.winhandle = false;
	this.deducthistory = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	this.winhistory = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	this.updateaccount = function() {
		this.deductamount = this.deducthandle.value;
		this.winbalance = this.winbalance.value;
		this.playbalance = this.playbalance.value;
	}
	this.updateelms = function() {
		this.deducthandle.value = this.deductamount;
		this.winhandle.value = this.winbalance;
		this.playhandle.value = this.playbalance;
	}
	this.deduct = function(damt) {
		damt = ((typeof damt === 'undefined')?(this.deductamount):(damt));
		if(this.winbalance < damt) {
			damt = this.winbalance;
		}
		this.winbalance -= damt;
		this.playbalance += damt;
		for(var i in this.deducthistory) {
			i = parseFloat(i);
			if(i<(this.deducthistory.length-1)) {
				this.deducthistory[i] = this.deducthistory[i+1];
			}
		}
		this.deducthistory[this.deducthistory.length-1] = damt;
		this.updateelms();
	}
	this.winadd = function(winpercent) {
		var winamt = this.playbalance * Math.round(winpercent*100000)/100000;
		this.playbalance -= winamt;
		this.winbalance += winamt;
		for(var i in this.winhistory) {
			i = parseFloat(i);
			if(i<(this.winhistory.length-1)) {
				this.winhistory[i] = this.winhistory[i+1];
			}
		}
		this.winhistory[this.winhistory.length-1] = winamt;
		this.updateelms();
	}
}

function randreal() {
	return new MersenneTwister(seed()).random();
}
var seed_i = 0;
function seed() {
	seed_i += 1;
	if(seed_i == 9999999999999) seed_i = 0;
	return Math.floor((new Date().getTime()) + (seed_i));
}


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

/*
  I've wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.
  
  If you want to use this as a substitute for Math.random(), use the random()
  method like so:
  
  var m = new MersenneTwister();
  var randomNumber = m.random();
  
  You can also call the other genrand_{foo}() methods on the instance.
 
  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:
 
  var m = new MersenneTwister(123);
 
  and that will always produce the same random sequence.
 
  Sean McCullough (banksean@gmail.com)
*/
 
/* 
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.
 
   Before using, initialize the state by using init_genrand(seed)  
   or init_by_array(init_key, key_length).
 
   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.						  
 
   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:
 
	 1. Redistributions of source code must retain the above copyright
		notice, this list of conditions and the following disclaimer.
 
	 2. Redistributions in binary form must reproduce the above copyright
		notice, this list of conditions and the following disclaimer in the
		documentation and/or other materials provided with the distribution.
 
	 3. The names of its contributors may not be used to endorse or promote 
		products derived from this software without specific prior written 
		permission.
 
   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 
 
   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/
 
var MersenneTwister = function(seed) {
  if (seed == undefined) {
	seed = new Date().getTime();
  } 
  /* Period parameters */  
  this.N = 624;
  this.M = 397;
  this.MATRIX_A = 0x9908b0df;   /* constant vector a */
  this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
  this.LOWER_MASK = 0x7fffffff; /* least significant r bits */
 
  this.mt = new Array(this.N); /* the array for the state vector */
  this.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */
 
  this.init_genrand(seed);
}  
 
/* initializes mt[N] with a seed */
MersenneTwister.prototype.init_genrand = function(s) {
  this.mt[0] = s >>> 0;
  for (this.mti=1; this.mti<this.N; this.mti++) {
	  var s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);
   this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
  + this.mti;
	  /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
	  /* In the previous versions, MSBs of the seed affect   */
	  /* only MSBs of the array mt[].						*/
	  /* 2002/01/09 modified by Makoto Matsumoto			 */
	  this.mt[this.mti] >>>= 0;
	  /* for >32 bit machines */
  }
}

/* initialize by an array with array-length */
/* init_key is the array for initializing keys */
/* key_length is its length */
/* slight change for C++, 2004/2/26 */
MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
  var i, j, k;
  this.init_genrand(19650218);
  i=1; j=0;
  k = (this.N>key_length ? this.N : key_length);
  for (; k; k--) {
	var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30)
	this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
	  + init_key[j] + j; /* non linear */
	this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
	i++; j++;
	if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
	if (j>=key_length) j=0;
  }
  for (k=this.N-1; k; k--) {
	var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
	this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
	  - i; /* non linear */
	this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
	i++;
	if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
  }
 
  this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */ 
}
 
/* generates a random number on [0,0xffffffff]-interval */
MersenneTwister.prototype.genrand_int32 = function() {
  var y;
  var mag01 = new Array(0x0, this.MATRIX_A);
  /* mag01[x] = x * MATRIX_A  for x=0,1 */
 
  if (this.mti >= this.N) { /* generate N words at one time */
	var kk;
 
	if (this.mti == this.N+1)   /* if init_genrand() has not been called, */
	  this.init_genrand(5489); /* a default initial seed is used */
 
	for (kk=0;kk<this.N-this.M;kk++) {
	  y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
	  this.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
	}
	for (;kk<this.N-1;kk++) {
	  y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
	  this.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
	}
	y = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);
	this.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];
 
	this.mti = 0;
  }
 
  y = this.mt[this.mti++];
 
  /* Tempering */
  y ^= (y >>> 11);
  y ^= (y << 7) & 0x9d2c5680;
  y ^= (y << 15) & 0xefc60000;
  y ^= (y >>> 18);
 
  return y >>> 0;
}
 
/* generates a random number on [0,0x7fffffff]-interval */
MersenneTwister.prototype.genrand_int31 = function() {
  return (this.genrand_int32()>>>1);
}
 
/* generates a random number on [0,1]-real-interval */
MersenneTwister.prototype.genrand_real1 = function() {
  return this.genrand_int32()*(1.0/4294967295.0); 
  /* divided by 2^32-1 */ 
}
 
/* generates a random number on [0,1)-real-interval */
MersenneTwister.prototype.random = function() {
  return this.genrand_int32()*(1.0/4294967296.0); 
  /* divided by 2^32 */
}
 
/* generates a random number on (0,1)-real-interval */
MersenneTwister.prototype.genrand_real3 = function() {
  return (this.genrand_int32() + 0.5)*(1.0/4294967296.0); 
  /* divided by 2^32 */
}
 
/* generates a random number on [0,1) with 53-bit resolution*/
MersenneTwister.prototype.genrand_res53 = function() { 
  var a=this.genrand_int32()>>>5, b=this.genrand_int32()>>>6; 
  return(a*67108864.0+b)*(1.0/9007199254740992.0); 
} 
 
/* These real versions are due to Isaku Wada, 2002/01/09 added */
