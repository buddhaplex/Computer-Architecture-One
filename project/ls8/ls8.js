const fs = require('fs');
const RAM = require('./ram');
const CPU = require('./cpu');

/**
 * Load an LS8 program into memory
 *
 * TODO: load this from a file on disk instead of having it hardcoded
 */
function loadMemory(cpu, filename) {

    const content = fs.readFileSync(filename, 'utf-8');

    const lines = content.trim().split(/[\r\n]+/g);
    
    program = [];

    for(let line of lines){
        
    }

    const program = [ // print8.ls8
        "10011001", // LDI R0,8  Store 8 into R0
        "00000000",
        "00001000",
        "01000011", // PRN R0    Print the value in R0
        "00000000",
        "00000001"  // HLT       Halt and quit
    ];

    // Load the program into the CPU's memory a byte at a time
    for (let i = 0; i < program.length; i++) {
        cpu.poke(i, parseInt(program[i], 2));
    }
}

/**
 * Main
 */
if(process.argv.length != 3) {
    console.error("usage: ls8 filename");
    process.exit(1);
}

let ram = new RAM(256);
let cpu = new CPU(ram);

// TODO: get name of ls8 file to load from command line

loadMemory(cpu, process.argv[2]);

cpu.startClock();