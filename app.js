document.addEventListener('DOMContentLoaded', function() {
    const startColorInput = document.getElementById('start-color');
    const endColorInput = document.getElementById('end-color');
    const gradientTypeSelect = document.getElementById('gradient-type');
    const previewDiv = document.getElementById('preview');

    startColorInput.addEventListener('input', generateGradient);
    endColorInput.addEventListener('input', generateGradient);
    gradientTypeSelect.addEventListener('change', generateGradient);

    generateGradient();

    function generateGradient() {
        const startColor = startColorInput.value;
        const endColor = endColorInput.value;
        const gradientType = gradientTypeSelect.value;

        let gradient;

        if (gradientType === 'horizontal') {
            gradient = `linear-gradient(to right, ${startColor}, ${endColor})`;
        } else {
            gradient = `linear-gradient(${startColor}, ${endColor})`;
        }

        previewDiv.style.background = gradient;
    }
});
