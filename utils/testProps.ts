export function testProps(id: string | null | undefined): object {
    return {
        testID: id,
        accessibilityLabel: id,
    };
}