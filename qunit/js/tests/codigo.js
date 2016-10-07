QUnit.test("Tests de sumatoria_hasta_el", function(assert) {
    // 1
    assert.strictEqual(
        Codigo.sumatoria_hasta_el(0),
        0,
        "Sumando hasta el 0"
    );
    // 2
    assert.strictEqual(
        Codigo.sumatoria_hasta_el(2),
        3,
        "Sumando hasta el 2"
    );
    // 3
    assert.strictEqual(
        Codigo.sumatoria_hasta_el(6),
        21,
        "Sumando hasta el 6"
    );
    // 4
    assert.strictEqual(
        Codigo.sumatoria_hasta_el(-4),
        0,
        "Dado un número negativo"
    );
    // 5
    assert.strictEqual(
        Codigo.sumatoria_hasta_el(10.3),
        0,
        "Dado un número flotante"
    );
    // 6
    assert.strictEqual(
        Codigo.sumatoria_hasta_el(true),
        0,
        "Dado un true"
    );
    // 7
    assert.strictEqual(
        Codigo.sumatoria_hasta_el({}),
        0,
        "Dado un objeto vacío"
    );
    // 8
    assert.strictEqual(
        Codigo.sumatoria_hasta_el(""),
        0,
        "Dada una cadena de caracteres vacía"
    );
    // 9
    assert.strictEqual(
        Codigo.sumatoria_hasta_el(),
        0,
        "Sin parámetro"
    );
});
