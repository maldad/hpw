QUnit.test("Tests de Rot13", function(assert) {
    //letra H
    assert.strictEqual(
        Rot13.change("A"),
        "N",
        "A por N"
    );
    assert.strictEqual(
        Rot13.change("H"),
        "U",
        "H por U"
    );
    assert.strictEqual(
        Rot13.change("c"),
        "p",
        "c por p"
    );
    assert.strictEqual(
        Rot13.change("m"),
        "z",
        "m por z"
    );
    assert.strictEqual(
        Rot13.encrypt("HOLA"),
        "UBYN",
        "HOLA por UBYN"
    );

    assert.strictEqual(
        Rot13.encrypt("H"),
        "U",
        "H por U"
    );
});
