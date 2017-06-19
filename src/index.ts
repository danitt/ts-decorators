console.log('hello world')

class Addy {
  @log
  add(a, b) {
    return a + b
  }
}

function log(targetClass, functionName, targetDescriptor) {
  // Get Old Data
  const oldValue = targetDescriptor.value
  // Modify Data
  targetDescriptor.value = function() {
    // Can only get real-time arguments here
    const classArguments = arguments
    console.log(`Calling "${functionName}" with`, classArguments)
    return oldValue.apply(null, classArguments)
  }
  // Return Descriptor
  return targetDescriptor
}

new Addy().add(2, 4)
