import tensorflowjs as tfjs

# Define the input and output paths
input_path = "pretrained_model.pb"
output_path = 'tfjs_output'

# Convert the .pb model to TensorFlow.js format
tfjs.converters.convert_tf_saved_model(input_path, output_path)

print('Conversion complete.')

