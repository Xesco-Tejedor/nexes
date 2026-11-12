const M=require('./model.js'),assert=require('node:assert/strict');
let a=M.empty();a=M.put(a,'contact:one',{note:'original'},'A');
const b=M.put(a,'contact:one',{note:'edit B'},'B'),c=M.put(a,'contact:one',{note:'edit C'},'C');
let merged=M.merge(b,c);assert.equal(merged.items['contact:one'].length,2);assert.deepEqual(M.merge(b,c),M.merge(c,b));assert.deepEqual(M.merge(merged,b),merged);
const resolved=M.put(merged,'contact:one',{note:'resolved'},'D');assert.equal(M.merge(resolved,b).items['contact:one'].length,1);
const deleted=M.put(a,'contact:one',null,'A');assert.equal(M.merge(deleted,b).items['contact:one'].length,2);assert.equal(M.winner(M.merge(deleted,a).items['contact:one']).value,null);
const late=M.put(M.empty(),'contact:two',{note:'new'},'E');assert.equal(Object.keys(M.merge(resolved,late).items).length,2);
console.log('PASS: independent additions, concurrent edits, deletion/edit conflict, causality, commutativity, idempotence and no resurrection of acknowledged deletion');
