QUnit.test("Tests de Rot13", function(assert) {
    //letra H
    assert.strictEqual(
        Rot13.cifrar("A"),
        "N",
        "A por N"
    );
    assert.strictEqual(
        Rot13.cifrar("H"),
        "U",
        "H por U"
    );
    assert.strictEqual(
        Rot13.cifrar("C"),
        "P",
        "C por P"
    );
    assert.strictEqual(
        Rot13.cifrar("M"),
        "Z",
        "M por Z"
    );
    assert.strictEqual(
        Rot13.cifrar("G"),
        "T",
        "G por T"
    );
    assert.strictEqual(
        Rot13.cifrar("AB"),
        "NO",
        "AB por NO"
    );
    assert.strictEqual(
        Rot13.cifrar("HOLA"),
        "UBYN",
        "HOLA por UBYN"
    );
});
