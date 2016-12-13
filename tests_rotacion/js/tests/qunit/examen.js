QUnit.test("Tests de Examen.fa", function(assert) {
	assert.strictEqual(Examen.fa("A",    3), "D"  , "Sustituye caracter");
	assert.strictEqual(Examen.fa("H",    8), "O"  , "Sustituye caracter");
	assert.strictEqual(Examen.fa("Z",    3), "C"  , "Sustituye caracter");
	assert.strictEqual(Examen.fa("W",    8), "E"  , "Sustituye caracter");
	
	assert.strictEqual(Examen.fa("a",    3), "d"  , "Sustituye caracter");
	assert.strictEqual(Examen.fa("h",    8), "o"  , "Sustituye caracter");
	assert.strictEqual(Examen.fa("z",    3), "c"  , "Sustituye caracter");
	assert.strictEqual(Examen.fa("w",    8), "e"  , "Sustituye caracter");
	
	assert.strictEqual(Examen.fa("Z",    0), "Z"  , "Regresa el mismo caracter");
	assert.strictEqual(Examen.fa("z",    0), "z"  , "Regresa el mismo caracter");
	
	assert.strictEqual(Examen.fa("@",    3), "@"  , "Regresa el mismo caracter");
	assert.strictEqual(Examen.fa(" ",    8), " "  , "Regresa el mismo caracter");
	
	assert.strictEqual(Examen.fa("@",   -3), "@"  , "Regresa el mismo caracter");
	assert.strictEqual(Examen.fa("W",   -8), "W"  , "Regresa el mismo caracter");
	
	assert.strictEqual(Examen.fa("@ @",  8), "@ @", "Regresa la misma cadena de caracteres");
	assert.strictEqual(Examen.fa("HOL",  7), "HOL", "Regresa la misma cadena de caracteres");
});

QUnit.test("Tests de Examen.fb", function(assert) {
	assert.strictEqual(Examen.fb("D",   -3), "A"  , "Sustituye caracter");
	assert.strictEqual(Examen.fb("O",   -8), "H"  , "Sustituye caracter");
	assert.strictEqual(Examen.fb("C",   -3), "Z"  , "Sustituye caracter");
	assert.strictEqual(Examen.fb("E",   -8), "W"  , "Sustituye caracter");
	
	assert.strictEqual(Examen.fb("d",   -3), "a"  , "Sustituye caracter");
	assert.strictEqual(Examen.fb("o",   -8), "h"  , "Sustituye caracter");
	assert.strictEqual(Examen.fb("c",   -3), "z"  , "Sustituye caracter");
	assert.strictEqual(Examen.fb("e",   -8), "w"  , "Sustituye caracter");
	
	assert.strictEqual(Examen.fb("Z",    0), "Z"  , "Regresa el mismo caracter");
	assert.strictEqual(Examen.fb("z",    0), "z"  , "Regresa el mismo caracter");
	
	assert.strictEqual(Examen.fb("@",   -3), "@"  , "Regresa el mismo caracter");
	assert.strictEqual(Examen.fb(" ",   -8), " "  , "Regresa el mismo caracter");
	
	assert.strictEqual(Examen.fb("@",    3), "@"  , "Regresa el mismo caracter");
	assert.strictEqual(Examen.fb("W",    8), "W"  , "Regresa el mismo caracter");
	
	assert.strictEqual(Examen.fb("@ @", -8), "@ @", "Regresa la misma cadena de caracteres");
	assert.strictEqual(Examen.fb("HOL", -7), "HOL", "Regresa la misma cadena de caracteres");
});

QUnit.test("Tests de Examen.fc", function(assert) {
	assert.strictEqual(Examen.fc("HOLA MUNDO")   , "HPND QATLX"   , "Sustituye caracteres");
	assert.strictEqual(Examen.fc("HOLA@MUNDO")   , "HPND@QATLX"   , "Sustituye caracteres");
	assert.strictEqual(Examen.fc(" 1HOLA 1")     , " 1JROF 1"     , "Sustituye caracteres");
	assert.strictEqual(Examen.fc("@@h O L  a !") , "@@j S Q  j !" , "Sustituye caracteres");
	assert.strictEqual(Examen.fc("   HoLAmUndO "), "   KsPGsCvnZ ", "Sustituye caracteres");

	assert.strictEqual(Examen.fc("AAAAA")   , "ABCDE"   , "Sustituye caracteres");
	assert.strictEqual(Examen.fc("zzzzz")   , "zabcd"   , "Sustituye caracteres");
	
	assert.strictEqual(Examen.fc("")   , ""   , "Regresa la misma cadena de caracteres");
	assert.strictEqual(Examen.fc("@ @"), "@ @", "Regresa la misma cadena de caracteres");
});

QUnit.test("Tests de Examen.fd", function(assert) {
	assert.strictEqual(Examen.fd("HPND QATLX")   , "HOLA MUNDO"   , "Sustituye caracteres");
	assert.strictEqual(Examen.fd("HPND@QATLX")   , "HOLA@MUNDO"   , "Sustituye caracteres");
	assert.strictEqual(Examen.fd(" 1JROF 1")     , " 1HOLA 1"     , "Sustituye caracteres");
	assert.strictEqual(Examen.fd("@@j S Q  j !") , "@@h O L  a !" , "Sustituye caracteres");
	assert.strictEqual(Examen.fd("   KsPGsCvnZ "), "   HoLAmUndO ", "Sustituye caracteres");
	
	assert.strictEqual(Examen.fd("ABCDE")   , "AAAAA"   , "Sustituye caracteres");
	assert.strictEqual(Examen.fd("zabcd")   , "zzzzz"   , "Sustituye caracteres");

	assert.strictEqual(Examen.fd("")   , ""   , "Regresa la misma cadena de caracteres");
	assert.strictEqual(Examen.fd("@ @"), "@ @", "Regresa la misma cadena de caracteres");
});