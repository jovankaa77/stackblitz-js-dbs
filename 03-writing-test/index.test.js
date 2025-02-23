import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test('uji fungsi sum', (t) => {
    assert.strictEqual(sum(1,2),3, 'Hasil nya harus 3');
    assert.strictEqual(sum(-1,1),0,'Hasilnya harus 0');
    assert.strictEqual(sum(0,0),0, 'Hasilnya harus 0');
    assert.strictEqual(sum(2.5,2.5),0, 'Hasilnya harus 5');
})