export async function getDocumentType() {
    const response = await fetch("/../../data/Selects/DocumentType.json");
    return response.json();
}